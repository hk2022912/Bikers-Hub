import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const getDistance = (lat1, lon1, lat2, lon2) => {
  const toRad = (value) => (value * Math.PI) / 180;
  const R = 6371; // Radius of Earth in km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a = Math.sin(dLat / 2) ** 2 +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
};

const UserMap = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0092,
    longitudeDelta: 0.0041,
  });
  const [markerCoordinate, setMarkerCoordinate] = useState(null);
  const [totalDistance, setTotalDistance] = useState(0);
  const [previousLocation, setPreviousLocation] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [duration, setDuration] = useState(0);
  const [locationDetails, setLocationDetails] = useState('');
  const [loading, setLoading] = useState(true);
  const [speed, setSpeed] = useState(0);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied.');
        setLoading(false);
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
      setRegion({
        ...region,
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
      });
      setStartTime(new Date());

      // Fetch detailed location data
      let [place] = await Location.reverseGeocodeAsync({
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
      });

      const exactLocation = `${place.name || ''}, ${place.district || ''}, ${place.city || ''}, ${place.region || ''}`;
      setLocationDetails(exactLocation.trim());
      setLoading(false);

      // Start location updates
      const locationSubscription = await Location.watchPositionAsync(
        { accuracy: Location.Accuracy.High, distanceInterval: 1 },
        (newLocation) => {
          setLocation(newLocation);
          setSpeed((newLocation.coords.speed * 3.6).toFixed(2)); // Convert m/s to km/h
          setRegion({
            ...region,
            latitude: newLocation.coords.latitude,
            longitude: newLocation.coords.longitude,
          });
        }
      );

      return () => {
        locationSubscription && locationSubscription.remove();
      };
    })();
  }, []);

  useEffect(() => {
    if (location) {
      setMarkerCoordinate({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      if (previousLocation) {
        const distance = getDistance(
          previousLocation.latitude,
          previousLocation.longitude,
          location.coords.latitude,
          location.coords.longitude
        );
        setTotalDistance(totalDistance + distance);
      }

      setPreviousLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      if (startTime) {
        const elapsed = (new Date() - startTime) / 1000;
        setDuration(elapsed);
      }
    }
  }, [location]);

  const zoomIn = () => {
    setRegion((prevRegion) => ({
      ...prevRegion,
      latitudeDelta: prevRegion.latitudeDelta * 0.5,
      longitudeDelta: prevRegion.longitudeDelta * 0.5,
    }));
  };

  const zoomOut = () => {
    setRegion((prevRegion) => ({
      ...prevRegion,
      latitudeDelta: prevRegion.latitudeDelta * 2,
      longitudeDelta: prevRegion.longitudeDelta * 2,
    }));
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />;
  }

  if (errorMsg) {
    return <Text>{errorMsg}</Text>;
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={setRegion}
      >
        {markerCoordinate && (
          <Marker coordinate={markerCoordinate} title="You are here" description={locationDetails} />
        )}
      </MapView>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>📍 Location: {locationDetails}</Text>
        <Text style={styles.infoText}>📏 Distance: {totalDistance.toFixed(2)} km</Text>
        <Text style={styles.infoText}>⏱️ Time: {Math.floor(duration / 60)} min {Math.floor(duration % 60)} sec</Text>
        <Text style={styles.infoText}>🚗 Speed: {speed} km/h</Text>
      </View>

      <View style={styles.zoomContainer}>
        <TouchableOpacity style={styles.zoomButton} onPress={zoomIn}>
          <Text style={styles.zoomText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.zoomButton} onPress={zoomOut}>
          <Text style={styles.zoomText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: '100%',
  },
  infoContainer: {
    position: 'absolute',
    bottom: 100,
    left: 20,
    right: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    marginVertical: 2,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  zoomContainer: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    flexDirection: 'column',
  },
  zoomButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  zoomText: {
    fontSize: 24,
    color: '#333',
  },
});

export default UserMap;
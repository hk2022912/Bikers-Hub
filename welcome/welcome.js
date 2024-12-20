import React, { useEffect } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

const Welcome = ({ navigation }) => {
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    // Start fade-in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    // Navigate to the LogRes screen after 3 seconds
    const timeout = setTimeout(() => {
      navigation.navigate('LogRes');
    }, 3000);

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [fadeAnim, navigation]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../../img/logo.png')} // Adjust the logo path
        style={[styles.logo, { opacity: fadeAnim }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
  },
  logo: {
    width: 400,
    height: 400,
  },
});

export default Welcome;
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Linking } from 'react-native';

const Wheels = ({ navigation }) => {
  const openYouTubeLink = () => {
    Linking.openURL('https://youtu.be/hdjB_wHW0-Q?si=8Vf6MM0bLqAYQ9Q5');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Clickable Image to Open YouTube Video */}
      <TouchableOpacity onPress={openYouTubeLink}>
        <Image source={require('../../img/wheels.png')} style={styles.image} />
      </TouchableOpacity>

      {/* Tools and Materials Section */}
      <View style={styles.toolsAndMaterials}>
        <Text style={styles.toolsAndMaterialsTitle}>Tools and Materials Needed:</Text>
        <Text style={styles.toolItem}>- Tire levers</Text>
        <Text style={styles.toolItem}>- Patch kit or a new tube</Text>
        <Text style={styles.toolItem}>- Air pump</Text>
        <Text style={styles.toolItem}>- Wrench (if your wheel doesn't have a quick release)</Text>
      </View>

      {/* Step-by-Step Guide */}
      <View style={styles.steps}>
        <Text style={styles.stepsTitle}>Steps:</Text>
        <Text style={styles.stepItem}>1. Remove the wheel from the bike frame.</Text>
        <Text style={styles.stepItem}>2. Use tire levers to remove the tire from the rim.</Text>
        <Text style={styles.stepItem}>3. Inspect the tire for punctures and repair them with a patch kit.</Text>
        <Text style={styles.stepItem}>4. Replace the tube or patch the existing one if necessary.</Text>
        <Text style={styles.stepItem}>5. Reassemble the tire back onto the rim and inflate it.</Text>
        <Text style={styles.stepItem}>6. Reattach the wheel to the bike frame.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  toolsAndMaterials: {
    marginBottom: 20,
  },
  toolsAndMaterialsTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  toolItem: {
    fontSize: 16,
    marginLeft: 20,
    color: '#555',
  },
  steps: {
    marginTop: 20,
  },
  stepsTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  stepItem: {
    fontSize: 16,
    marginLeft: 20,
    color: '#555',
    marginBottom: 5,
  },
});

export default Wheels;
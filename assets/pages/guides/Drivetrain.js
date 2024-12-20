import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Linking } from 'react-native';

const Drivetrain = ({ navigation }) => {
  const openYouTubeLink = () => {
    Linking.openURL('https://youtu.be/2ebN17nw5CY?si=ncJqBfPDEcMIUFFQ');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Clickable Image to Open YouTube Video */}
      <TouchableOpacity onPress={openYouTubeLink}>
        <Image source={require('../../img/drivetrain.png')} style={styles.image} />
      </TouchableOpacity>

      {/* Tools and Materials Section */}
      <View style={styles.toolsAndMaterials}>
        <Text style={styles.toolsAndMaterialsTitle}>Tools and Materials Needed:</Text>
        <Text style={styles.toolItem}>- Hex/Allen Wrench Set</Text>
        <Text style={styles.toolItem}>- Torque Wrench</Text>
        <Text style={styles.toolItem}>- Screwdriver Set</Text>
        <Text style={styles.toolItem}>- Soft-Bristle Brush</Text>
        <Text style={styles.toolItem}>- Cleaning Brush Set</Text>
      </View>

      {/* Step-by-Step Guide */}
      <View style={styles.steps}>
        <Text style={styles.stepsTitle}>Steps:</Text>
        <Text style={styles.stepItem}>1. Loosen the bolts securing the handlebars.</Text>
        <Text style={styles.stepItem}>2. Adjust the handlebar height and angle as desired.</Text>
        <Text style={styles.stepItem}>3. Tighten the bolts to secure the handlebars.</Text>
        <Text style={styles.stepItem}>4. Ensure all bolts are tight and handlebars are stable.</Text>
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

export default Drivetrain;
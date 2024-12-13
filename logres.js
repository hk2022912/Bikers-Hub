import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LogRes = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../img/logoCut.png')} style={styles.logoImage} />
      <Text style={styles.title}>Welcome to BikersHub</Text>
      <Text style={styles.description}>Please choose an option to continue</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={[styles.buttonText, styles.secondaryButtonText]}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    padding: 16,
  },
  logoImage: {
    width: 200,
    height: 200,
    marginBottom: 24,
  },
  title: {
    fontSize: 29,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
  },
  description: {
    fontSize: 18,
    color: '#6b7280',
    marginBottom: 50,
    textAlign: 'center',
    paddingBottom: 30,
  },
  button: {
    width: '80%',
    padding: 18,
    backgroundColor: '#2563eb',
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  secondaryButton: {
    backgroundColor: '#64748b',
  },
  secondaryButtonText: {
    color: '#ffffff',
  },
});

export default LogRes;
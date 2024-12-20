import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importing Ionicons icon set

const Guide = ({ navigation }) => {
  const tutorials = [
    {
      title: 'Wheels',
      description: 'Learn how to maintain and replace wheels',
      icon: require('../../img/wheels.png'), // Updated image path
      screen: 'Wheels',
    },
    {
      title: 'Handlebars',
      description: 'Discover how to adjust and replace handlebars',
      icon: require('../../img/handlebars.png'), // Updated image path
      screen: 'Handlebars',
    },
    {
      title: 'Brakes',
      description: 'Troubleshooting common brake issues',
      icon: require('../../img/Brakes.png'), // Updated image path
      screen: 'Brakes',
    },
    {
      title: 'Frame',
      description: 'Understand your bike frame',
      icon: require('../../img/Frame.png'), // Updated image path
      screen: 'Frame',
    },
    {
      title: 'Fork',
      description: 'To replace or adjust your fork',
      icon: require('../../img/fork.png'), // Updated image path
      screen: 'Fork',
    },
    {
      title: 'Saddle (Seat)',
      description: 'Learn how to adjust saddle height and angle',
      icon: require('../../img/saddle.png'), // Updated image path
      screen: 'Saddle',
    },
    {
      title: 'Drivetrain',
      description: 'Keep your drivetrain running smoothly',
      icon: require('../../img/drivetrain.png'), // Updated image path
      screen: 'Drivetrain',
    },
    {
      title: 'Gears and Shifters',
      description: 'Struggling with gear shifting',
      icon: require('../../img/gears.png'), // Updated image path
      screen: 'Gears and Shifters',
    },
    {
      title: 'Suspension (Optional)',
      description: 'Maintain your suspension system',
      icon: require('../../img/suspension.png'), // Updated image path
      screen: 'Suspension (Optional)',
    },
    {
      title: 'Accessories',
      description: 'Essential bike accessories to enhance safety',
      icon: require('../../img/Accessories.png'), // Updated image path
      screen: 'Accessories',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Tutorials List */}
      <View style={styles.tutorialsList}>
        {tutorials.map((tutorial, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.tutorialItem}
            onPress={() => navigation.navigate(tutorial.screen)}
          >
            {/* Tutorial image */}
            <Image source={tutorial.icon} style={styles.tutorialIcon} />
            <View style={styles.tutorialInfo}>
              <Text style={styles.tutorialTitle}>{tutorial.title}</Text>
              <Text style={styles.tutorialDescription}>{tutorial.description}</Text>
            </View>
            {/* Chevron-right icon */}
            <Icon name="chevron-forward" size={20} color="#333" style={styles.rightArrow} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Ensures content grows and fills the screen
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  tutorialsList: {
    flex: 1,
  },
  tutorialItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 10,
  },
  tutorialIcon: {
    width: 60,
    height: 60,
    marginRight: 15,
    borderRadius: 10,
  },
  tutorialInfo: {
    flex: 1,
  },
  tutorialTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  tutorialDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  rightArrow: {
    marginLeft: 10,
  },
});

export default Guide;
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const SafetyTips = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      
      <View style={styles.section}>
        <Text style={styles.tip}>1. Wear a Helmet</Text>
        <Text style={styles.tipDescription}>
          Always wear a helmet to protect your head in case of an accident.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.tip}>2. Check Your Bike</Text>
        <Text style={styles.tipDescription}>
          Ensure your bike is in good condition before riding—check brakes, tires, and other safety features.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.tip}>3. Use Hand Signals</Text>
        <Text style={styles.tipDescription}>
          Signal your turns to ensure other riders and drivers know your intentions.
        </Text>
        </View>

        <View style={styles.section}>
        <Text style={styles.tip}>4. Plan Your Route Ahead </Text>
        <Text style={styles.tipDescription}>
         Use BikersHub to plan your route before you start riding. Knowing where you’re going helps you stay focused and safer on the road.        </Text>
         </View>

         <View style={styles.section}>
        <Text style={styles.tip}>5. Use Reflective Gear at Night</Text>
        <Text style={styles.tipDescription}>
        If you’re riding at night, wear reflective clothes or add reflective stickers to your bike. This helps drivers see you better.        </Text>
        </View>

        <View style={styles.section}>
        <Text style={styles.tip}>6. Keep Your Bike in Shape</Text>
        <Text style={styles.tipDescription}>
        Use BikersHub’s maintenance tips to keep your bike well-tuned. A healthy bike means a safer ride!        </Text>
        </View>

        <View style={styles.section}>
        <Text style={styles.tip}>7.Be Aware of Surroundings</Text>
        <Text style={styles.tipDescription}>
        Always keep an eye out for cars, people, and other bikers. Check mirrors or turn your head when changing lanes.        </Text>
        </View>

        <View style={styles.section}>
        <Text style={styles.tip}>8. Ride with a Friend</Text>
        <Text style={styles.tipDescription}>
        If possible, ride with a friend or in a group. It’s safer, and you have someone with you in case of an emergency.        </Text>
        </View>

        <View style={styles.section}>
        <Text style={styles.tip}>9. Check the Weather</Text>
        <Text style={styles.tipDescription}>
        Before you head out, check the weather on BikersHub or any weather app. Avoid riding in heavy rain or strong winds if possible.        </Text>
        </View>

        <View style={styles.section}>
        <Text style={styles.tip}>10. Stay Visible</Text>
        <Text style={styles.tipDescription}>
        Wear bright colors, especially in the daytime, to help others see you easily on the road.        </Text>
        </View>

        <View style={styles.section}>
        <Text style={styles.tip}>11. Watch for Road Hazards</Text>
        <Text style={styles.tipDescription}>
        Be cautious of potholes, loose gravel, or other obstacles. BikersHub’s tips can help you ride safely over different surfaces.       
         </Text>
         </View>

         <View style={styles.section}>
        <Text style={styles.tip}>12. Lock Your Bike When Stopping</Text>
        <Text style={styles.tipDescription}>
        When you park your bike, use a sturdy lock to keep it safe. BikersHub can guide you to find recommended locks and secure parking spots.
        </Text>
        </View>

        <View style={styles.section}>
        <Text style={styles.tip}>13. Take Breaks on Long Rides</Text>
        <Text style={styles.tipDescription}>
        Don’t push yourself too hard. Take breaks if you’re going for a long ride to avoid exhaustion.
        </Text>
        </View>

        <View style={styles.section}>
        <Text style={styles.tip}>14. Follow Traffic Rules</Text>
        <Text style={styles.tipDescription}>
        Ride like you’re driving a car. Stop at red lights, yield to pedestrians, and follow road signs.        
        </Text>
        </View>

        <View style={styles.section}>
        <Text style={styles.tip}>15. Avoid Using Headphones</Text>
        <Text style={styles.tipDescription}>
        Listening to music is fun, but it can distract you. Try to avoid headphones so you can hear what’s happening around you.        
        </Text>
        </View>

        <View style={styles.section}>
        <Text style={styles.tip}>16. Use BikersHub’s Safety Tips</Text>
        <Text style={styles.tipDescription}>
        Our app is filled with tips for beginner and advanced riders. Check these tips often to keep your skills sharp.        
        </Text>
        </View>

        <View style={styles.section}>
        <Text style={styles.tip}>17. Install Bike Lights</Text>
        <Text style={styles.tipDescription}>
        Add front and back lights to your bike, especially if you’re riding early in the morning or at night.        
        </Text>
        </View>

        <View style={styles.section}>
        <Text style={styles.tip}>18. Hydrate and Snack Smartly</Text>
        <Text style={styles.tipDescription}>
        Keep a water bottle handy and bring a snack on longer rides. Staying energized helps you stay focused.        
        </Text>
        </View>

        <View style={styles.section}>
        <Text style={styles.tip}>19. Report Unsafe Areas</Text>
        <Text style={styles.tipDescription}>
        If you see any dangerous spots or broken paths on your route, report them using BikersHub. Helping each other keeps the biking community safer!
        </Text>
        </View>

        <View style={styles.section}>
        <Text style={styles.tip}>20. Know Your Limits</Text>
        <Text style={styles.tipDescription}>
        Don’t push yourself to ride longer or faster than you’re comfortable with. It’s important to listen to your body and take breaks when needed to avoid fatigue or injury.         </Text>
        </View>


        {/* Add more safety tips */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  section: { 
    width: '100%', 
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    borderRadius: 20, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 4,
    marginBottom: 10,
  },

  scrollContainer: {
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  tip: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#006400',
    },
  tipDescription: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default SafetyTips;
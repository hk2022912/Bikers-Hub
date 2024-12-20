import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const MaintenanceTips = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.section}>        
        <Text style={styles.text}>General Care</Text>
        
        <View style={styles.section}>        
        <Text style={styles.tip}>1. Keep it clean</Text>
        <Text style={styles.tipDescription}>
        Wash your bike after every ride, especially if it's muddy. A clean bike lasts longer.
        </Text>
        </View>

        <View style={styles.section}>        
        <Text style={styles.tip}>2. Check tire pressure</Text>
        <Text style={styles.tipDescription}>
        Pump your tires to the right level before riding. Low pressure makes it harder to ride and can damage the rims.
        </Text>
        </View>

        <View style={styles.section}>        
        <Text style={styles.tip}>3. Inspect your chain</Text>
        <Text style={styles.tipDescription}>
        Clean and oil your chain regularly. A dry or dirty chain can snap or wear out quickly.
        </Text>       
        </View>

      </View>

      <View style={styles.section}>        
        <Text style={styles.text}>Brakes</Text>
        
        <View style={styles.section}>        
        <Text style={styles.tip}>1. Test your brakes</Text>
        <Text style={styles.tipDescription}>
        Before every ride, make sure the brakes stop smoothly and don’t squeak.
        </Text>
        </View>

        <View style={styles.section}>        
        <Text style={styles.tip}>2. Check brake pads</Text>
        <Text style={styles.tipDescription}>
        Worn-out brake pads are dangerous. Replace them if they’re too thin.
        </Text>
        </View>

        <View style={styles.section}>        
        <Text style={styles.tip}>3. Keep brake cables tight</Text>
        <Text style={styles.tipDescription}>
        Loose cables make it harder to stop. Tighten them if they feel slack.
        </Text>       
        </View>

      </View>

      
      <View style={styles.section}>        
        <Text style={styles.text}>Wheels and Tires</Text>
        
        <View style={styles.section}>        
        <Text style={styles.tip}>1. Look for punctures</Text>
        <Text style={styles.tipDescription}>
        Check for small holes or sharp objects stuck in the tires.
        </Text>
        </View>

        <View style={styles.section}>        
        <Text style={styles.tip}>2. Tighten spokes</Text>
        <Text style={styles.tipDescription}>
        Wobbly wheels can be fixed by tightening the spokes evenly.
        </Text>
        </View>

        <View style={styles.section}>        
        <Text style={styles.tip}>3. Replace old tires</Text>
        <Text style={styles.tipDescription}>
        Bald or cracked tires can make you slip, especially in the rain.
        </Text>       
        </View>

      </View>

      
      <View style={styles.section}>        
        <Text style={styles.text}>Gears</Text>
        
        <View style={styles.section}>        
        <Text style={styles.tip}>1. Shift smoothly</Text>
        <Text style={styles.tipDescription}>
        Don’t force your gears to change, especially when going uphill.
        </Text>
        </View>

        <View style={styles.section}>        
        <Text style={styles.tip}>2. Keep gears clean</Text>
        <Text style={styles.tipDescription}>
        Dirt in the gears can make your ride noisy or bumpy.
        </Text>
        </View>

        <View style={styles.section}>        
        <Text style={styles.tip}>3. Adjust the derailleur</Text>
        <Text style={styles.tipDescription}>
        If your chain keeps skipping, you might need to tweak the derailleur.
        </Text>       
        </View>

      </View>

      <View style={styles.section}>        
        <Text style={styles.text}>Frame</Text>
        
        <View style={styles.section}>        
        <Text style={styles.tip}>1. Inspect for cracks</Text>
        <Text style={styles.tipDescription}>
        Check the bike frame for cracks or dents. Small problems can become big ones.
        </Text>
        </View>

        <View style={styles.section}>        
        <Text style={styles.tip}>2. Tighten bolts</Text>
        <Text style={styles.tipDescription}>
        Loose bolts on your seat, handlebars, or wheels can cause accidents.
        </Text>
        </View>

      </View>

            
      <View style={styles.section}>        
        <Text style={styles.text}>Handlebars and Saddle</Text>
        
        <View style={styles.section}>        
        <Text style={styles.tip}>1. Adjust the saddle height</Text>
        <Text style={styles.tipDescription}>
        Riding with the wrong seat height can hurt your back and knees.        
        </Text>
        </View>

        <View style={styles.section}>        
        <Text style={styles.tip}>2. Check handlebar grips</Text>
        <Text style={styles.tipDescription}>
        Replace worn or slippery grips for better control.        
        </Text>
        </View>

      </View>
            
      <View style={styles.section}>        
        <Text style={styles.text}>Lights and Accessories</Text>
        
        <View style={styles.section}>        
        <Text style={styles.tip}>1. Test your lights</Text>
        <Text style={styles.tipDescription}>
        If you ride at night, make sure your front and back lights are bright.        
        </Text>
        </View>

        <View style={styles.section}>        
        <Text style={styles.tip}>2. Secure your bell</Text>
        <Text style={styles.tipDescription}>
        A working bell helps warn others on the road.       
        </Text>
        </View>

      </View>

            
      <View style={styles.section}>        
        <Text style={styles.text}>Seasonal Tips</Text>
        
        <View style={styles.section}>        
        <Text style={styles.tip}>1. Prepare for rain</Text>
        <Text style={styles.tipDescription}>
        Use fenders to keep mud off your clothes during wet rides.        
        </Text>
        </View>

        <View style={styles.section}>        
        <Text style={styles.tip}>2. Store properly</Text>
        <Text style={styles.tipDescription}>
        Keep your bike in a dry place to avoid rust when you’re not riding.        
        </Text>
        </View>

      </View>

        {/* Add more maintenance tips */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  text: {
    fontSize: 29,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#006400',
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
    
  },
  tipDescription: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default MaintenanceTips;
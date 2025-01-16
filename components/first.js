import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
function HomeScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.title}>Home Screen</Text>
    </View>
  );
}
function SignupScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.title}>Signup Screen</Text>
    </View>
  );
}
function ContactUsScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.title}>Contact Us Screen</Text>
    </View>
  );
}


function AboutScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.title}>About Screen</Text>
    </View>
  );
}


const Drawer = createDrawerNavigator();


function First() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Signup" component={SignupScreen} />
        <Drawer.Screen name="Contact Us" component={ContactUsScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// Styles for screens
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default First;

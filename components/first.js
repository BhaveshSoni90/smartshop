import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';  // Import for Tab Navigation
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();  // Create the Tab navigator

// Simple screen components
function HomeScreen() {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View>
      <Text>Settings Screen</Text>
    </View>
  );
}

// Main component with Tab Navigation
function First() {
  return (
    <NavigationContainer>
      {/* Wrap Tab.Screen inside Tab.Navigator */}
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default First;

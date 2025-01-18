import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';  // Import this
import { View, Text, ScrollView } from 'react-native';
import First from './components/first';
const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* Your app's component tree goes here */}
      <ScrollView>
        <First/>
        <Text>Some scrollable content</Text>
        {/* More scrollable content */}
      </ScrollView>
    </GestureHandlerRootView>
  );
};
export default App;
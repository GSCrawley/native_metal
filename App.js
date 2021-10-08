import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Bands from './BandScreen'
import Stats from './StatScreen'

const Stack = createStackNavigator();




function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Bands" component={Bands} />
        <Stack.Screen name="Stats" component={Stats} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Bands from './screens/BandScreen'
import Stats from './screens/StatScreen'

const Tab = createBottomTabNavigator();




function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
          initialRouteName="Bands"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
        <Tab.Screen 
          name="Bands" 
          component={Bands}
          options={{ 
            title: "Metal Bands",
            headerStyle: {
              backgroundColor: '#f4511e'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 24
            }
          }}
        /> 
        <Tab.Screen 
        name="Stats" 
        component={Stats}
        options={{ 
          title: "Band Stats",
          headerStyle: {
            backgroundColor: '#f4511e'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 24
          }
        }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
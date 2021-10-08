import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Bands from './screens/BandScreen'
import Stats from './screens/StatScreen'

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch(route.name) {
              case 'Bands':
                iconName = focused
                ? 'fas fa-guitar' : 'fa-guitar'
                break;
              case 'Stats':
                iconName = focused
                ? 'fas fa-stream' : 'fa-stream'
                break;
            } 
          return <Icon name={iconName} size={32} color="red" />
          },
        })}
>
      <Tab.Screen name='Bands' component={BandScreen} />    
        <Tab.Screen name='Stats' component={StatScreen} />


      </Tab.Navigator>
    </NavigationContainer>
  );
}


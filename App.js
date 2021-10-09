import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHandRock, faChartBar, faBullseye } from '@fortawesome/free-solid-svg-icons'

import Bands from './screens/BandScreen'
import Stats from './screens/StatScreen'
import Styles from './screens/StyleScreen'

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
            switch(route.name) {
              case 'Bands':
                iconName = focused
                ? faHandRock : faHandRock 
                break;
              case 'Stats':
                iconName = focused
                ? faChartBar : faChartBar
                break;
              case 'Styles':
                iconName = focused 
                ? faBullseye : faBullseye
                break;
            } 
          return <FontAwesomeIcon icon={iconName} size={32} color="black" />
          },
        })}
>
      <Tab.Screen name='Bands' component={Bands} />    
        <Tab.Screen name='Stats' component={Stats} />
        <Tab.Screen name='Styles' component={Styles} />


      </Tab.Navigator>
    </NavigationContainer>
  );
}


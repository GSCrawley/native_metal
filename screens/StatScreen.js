import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { View, Text, Button } from 'react-native';


export default function Stats( {route, navigation} ) {

  // const { itemId, otherParam } = route.params;
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Stats</Text>
        {/* <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text> */}
        {/* <Button
          title="More Stats"
          onPress={() => 
            navigation.push('Stats', {
              itemId: Math.floor(Math.random() * 100),
            })
          }
      /> */}
      <Button title="Go Home" onPress={() => navigation.navigate('Bands')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />

      </View>
    );
  }
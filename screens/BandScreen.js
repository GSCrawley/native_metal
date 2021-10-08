import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default function Bands({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
          title="see Stats"
          onPress={() => {
            navigation.navigate('Stats', {
            itemId: 86,
            otherParam: 'whatever the hell you want',
          });
        }}
      />   
    </View>
  );
}
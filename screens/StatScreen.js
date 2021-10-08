import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { View, Text, Button } from 'react-native';


export default function Stats( {navigation} ) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Stats</Text>
        <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Stats')}
      />
      <Button title="Go Home" onPress={() => navigation.navigate('Bands')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />

      </View>
    );
  }
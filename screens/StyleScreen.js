import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Styles( {route, navigation} ) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Styles</Text>

          </View>
    );
  }
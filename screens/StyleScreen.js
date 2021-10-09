
import * as React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { metalBands } from '../metal'


export default function Styles( ) {
    const metal_genre = metalBands.map(item => item.style)
    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Styles</Text>

          </View>
    );
  }
  
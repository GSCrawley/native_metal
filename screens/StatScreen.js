
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { metalBands } from '../metal'



export default function Stats() { 
  // how many fans?
  let fans = 0;
  metalBands.forEach((band) => {
    fans += band.fans
  });
    
  //where are they from?
  const countries = [];
  metalBands.forEach((band) => {
    if (!countries.includes(band.origin)) {
      countries.push(band.origin);
    }
  });

  //are they still together?
  let active = 0;
  metalBands.forEach((band) => {
    if (band.split === '-') active =+ 1;
  });

  return (
    <View style={styles.view}>
      <Text style={styles.title}>METAL 🤘</Text>
      <Text>
        <Text style={[styles.info, styles.bold]}>Count: </Text>
        <Text style={styles.info}>{metalBands.length}</Text>
      </Text>
      <Text>
        <Text style={[styles.info, styles.bold]}>Fans: </Text>
        <Text style={styles.info}>{(fans*1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
      </Text>
      <Text>
        <Text style={[styles.info, styles.bold]}>Countries: </Text>
        <Text style={styles.info}>{countries.length}</Text>
      </Text>
      <Text>
        <Text style={[styles.info, styles.bold]}>Active: </Text>
        <Text style={styles.info}>{active}</Text>
      </Text>
      <Text>
        <Text style={[styles.info, styles.bold]}>Split: </Text>
        <Text style={styles.info}>{metalBands.length - active}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black'
  },
  info: {
    color: 'white',
    fontSize: 24
  },
  bold: {
    fontWeight: 'bold'
  }
});


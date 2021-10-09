
import * as React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { metalBands } from '../metal'

function Separator() {
  return <View style={{ borderBottomWidth: 3, borderBottomColor: 'red' }} />
}

export default function Styles( ) {
    const metal_genre = metalBands.map(item => item.style)
    const unique = metal_genre.filter(function (value, index) {
      return metal_genre.indexOf(value) === index;
    });
    const uniqueCount = unique.reduce(function (accumulator, item) {
      if(item) {
        return accumulator + 1
      }
        return accumulator + 0
      }, 0);
      
    return (
      <SafeAreaView style={styles.container}>
      <View> 
          <Text style={styles.heading}>Metal Genres</Text>
          
          <FlatList
              data={metalBands }
              keyExtractor={(item) => item.band_name}
              ItemSeparatorComponent={() => Separator()}
              renderItem={({ item }) => (
          <View style={styles.list}>
              <Text style={styles.text}>
                  {item.style}
              </Text>
          </View>
          )}
          />
      </View>
  </SafeAreaView>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black",
    justifyContent: "center"
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
    marginTop: 50,
    paddingTop: 50,
    color: "white",
  },
  text: {
      fontSize: 18,
      flex: 1,
      flexGrow: 1,
      color: "white",
  },
  list: {
    padding: 10,
		margin: 1,
    backgroundColor: "black"
    },
  
})

  
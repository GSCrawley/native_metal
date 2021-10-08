import * as React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { metalBands } from '../metal'



function Band({ band_name, formed, origin, fans, split }) {  
  return(
    <View style={styles.band}>
      <View style={styles.infoTop}>
        <Text style={split == "-" ? styles.nameTogether : styles.nameSplit }>{band_name}</Text>
        <Text style={styles.origin}>{origin}</Text>
      </View>
      <View style={styles.infoBottom}>
        <Text style={styles.formed}>{formed}</Text>
        <Text style={styles.fans}>{(fans*1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
      </View>
    </View>
  )
}

export default function Bands() {
  const renderItem = ({ item }) => (
    <Band {...item} />
  );

  return (
    <View style={{backgroundColor: 'black', padding: 10}}>
      <SafeAreaView>
        <FlatList
          data={ metalBands }
          renderItem= {renderItem}
          keyExtractor={band => band.ID.toString()}
          />
        
      </SafeAreaView>
    </View>
     
  );
}


const styles = StyleSheet.create({
  band: {
    padding: 5,
    paddingBottom: 10,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#444444'
  },
  infoTop: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoBottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameTogether: {
    color: 'white',
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  nameSplit: {
    color: 'grey',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  formed: {
    color: 'white',
    fontSize: 16
  },
  origin: {
    fontSize: 18,
    color: '#979797'
  },
  fans: {
    color: 'white',
    fontSize: 16
  }
});
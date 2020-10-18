import React from 'react';

import { View, StyleSheet } from 'react-native';
import Map from '../components/map/Map';
//import Search from '../components/map/Search';

function MapPage() {
  return (
    <View style={styles.screenStyle}>
      {/*<Search />*/}
      <Map />
    </View>
  );
}

export default MapPage;

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    //position: 'relative',
  },
});

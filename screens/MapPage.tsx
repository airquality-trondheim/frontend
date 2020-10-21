import React from 'react';
import { View, StyleSheet } from 'react-native';
import Map from '../components/map/Map';
import Session from '../components/Session';
//import Search from '../components/map/Search';

function MapPage() {
  return (
    <View style={styles.screenStyle}>
      <Map />
      <Session />
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

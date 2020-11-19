import React from 'react';
import { View, StyleSheet } from 'react-native';
import Map from '../components/map/Map';
import Session from '../components/Session';
import MapInfo from '../components/map/MapInfo';

function MapPage() {
  return (
    <View style={styles.screenStyle}>
      <Map />
      <Session />
      <MapInfo />
    </View>
  );
}

export default MapPage;

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
  },
});

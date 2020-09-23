import React, { useState } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

function Map() {
  const [location, setLocation] = useState({
    latitude: 63.446827,
    longitude: 10.421906,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  return <MapView style={{ flex: 1 }} region={location} />;
}

export default Map;

const Styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

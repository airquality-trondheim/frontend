import React, { useState } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

// TODO: create typescript interface for props
// TODO: Map component take in props

export default function Map() {
  const [mapRegion, setMapRegion] = useState({
    latitude: 63.446827,
    longitude: 10.421906,
    latitudeDelta: 0.0043,
    longitudeDelta: 0.0034,
  });

  return (
    <MapView
      style={styles.map}
      region={mapRegion}
      onRegionChangeComplete={(region) => setMapRegion(region)}
    />
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

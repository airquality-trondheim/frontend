import React from 'react';

import { View, StyleSheet } from 'react-native';
import Map from '../components/Map';
import Search from '../components/Search';

// TODO: Redux stuff with Map

function MapPage() {
  return (
    <View style={styles.screenStyle}>
      <Map />
      <Search />
    </View>
  );
}

export default MapPage;

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    position: 'relative',
  },
});

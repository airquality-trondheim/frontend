import React from 'react';

import { View, StyleSheet } from 'react-native';
import Map from '../components/Map';

function MapPage() {
  return (
    <View style={styles.screenStyle}>
      <Map />
    </View>
  );
}

export default MapPage;

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function WeatherScreen() {
  return (
    <View style={styles.screenStyle}>
      <Text>Heiei</Text>
    </View>
  );
}

export default WeatherScreen;

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

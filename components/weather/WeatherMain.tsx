import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BOTTOMBORDER } from '../../constants/Colors';
import WeatherComponentSmall from './WeatherListItem';

export default function WeatherCarousel() {
  const weatherElemts = [0, 1, 2];
  return (
    <>
      {weatherElemts.map((index) => (
        <View key={index} style={styles.weatherElement}>
          <WeatherComponentSmall count={index} />
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  weatherElement: {
    borderTopWidth: 3,
    borderTopColor: BOTTOMBORDER,
  },
});

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { LIGHTGRAY } from '../../constants/Colors';
import { carouselHeight, width } from '../../constants/Layout';
import AQBarChart from './BarChart';

function AQCard() {
  return (
    <View style={styles.chart}>
      <Text style={styles.border} />
      <View style={styles.container}>
        <Text>Nå </Text>
        <AQBarChart now />
        <Text>Om 1 time</Text>
        <AQBarChart now={false} />
      </View>
    </View>
  );
}

export default AQCard;

const styles = StyleSheet.create({
  chart: {
    height: carouselHeight * 0.8,
    padding: 0,
    width: width * 0.35,
  },
  border: {
    borderTopColor: LIGHTGRAY,
    borderTopWidth: 3,
    marginTop: -3,
  },
  container: {
    marginTop: -12,
  },
});

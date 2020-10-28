import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {
  AQHIGH,
  AQLOW,
  AQMEDIUM,
  AQVERYHIGH,
  LIGHTGRAY,
} from '../../constants/Colors';
import { carouselHeight, width } from '../../constants/Layout';
import AQBarChart from './BarChart';
import { AQData } from './BarChart';

function AQCard() {
  return (
    <View style={styles.chart}>
      <Text style={styles.border} />
      <View style={styles.container}>
        <Text>Today</Text>
        <AQBarChart />
        <Text>Tomorrow</Text>
        <AQBarChart />
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

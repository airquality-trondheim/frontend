import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { LIGHTGRAY } from '../../constants/Colors';
import { carouselHeight, width } from '../../constants/Layout';
import AQBarChart from './BarChart';
import { AQData } from './BarChart';

function AQCard() {
  const data: Array<AQData> = [
    {
      value: 1,
      type: 'pm10',
    },
    {
      value: 2,
      type: 'pm10',
    },
    {
      value: 3,
      type: 'pm10',
    },
    {
      value: 4,
      type: 'pm10',
    },
  ];
  return (
    <View style={styles.chart}>
      <Text style={styles.border} />
      <View style={styles.container}>
        <Text>Today</Text>
        {/*  */}
        <AQBarChart {...{ data }} />
        <Text>Tomorrow</Text>
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

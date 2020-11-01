import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import React, { useState } from 'react';
import AQChart from '../components/airquality/AQChart';
import { height, width } from '../constants/Layout';
import { LIGHTBLUE } from '../constants/Colors';

export type AQIData = {
  todayData: Array<number>;
  tomorrowData: Array<number>;
  type: string;
};

export default function AirQualityScreen() {
  const AQ = {
    todayData: [
      1,
      2,
      4,
      3,
      2,
      2,
      3,
      1,
      1,
      1,
      3,
      1,
      1,
      2,
      3,
      4,
      1,
      4,
      2,
      2,
      1,
      1,
      1,
    ],
    tomorrowData: [
      4,
      4,
      1,
      4,
      4,
      2,
      3,
      1,
      1,
      1,
      3,
      1,
      1,
      2,
      3,
      4,
      1,
      4,
      2,
      2,
      1,
      1,
      1,
    ],
    type: 'AQI',
  };

  return (
    <View style={styles.carouselContainerStyle}>
      <ScrollView>
        <View style={styles.scrollStyle}>
          <AQChart {...{ AQ }} />
          <AQChart {...{ AQ }} />
          <AQChart {...{ AQ }} />
          <AQChart {...{ AQ }} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  carouselContainerStyle: {
    height: height,
    borderWidth: 2,
  },
  barYAxis: {
    backgroundColor: LIGHTBLUE,
    width: 30,
    height: height * 0.3,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginRight: 4,
    marginLeft: 4,
  },
  chartContainer: {
    height: height * 0.3,
    display: 'flex',
    flexDirection: 'row',
  },
  chart: {
    marginLeft: 4,
  },
  text: {
    fontSize: 16,
  },
  button: {
    width: width * 0.3,
  },
  scrollStyle: {
    height: height * 1.8,
  },
});

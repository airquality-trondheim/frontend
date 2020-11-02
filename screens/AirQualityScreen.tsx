import { View, StyleSheet, ScrollView, Platform } from 'react-native';
import React from 'react';
import AQChart from '../components/airquality/AQChart';
import { height, width } from '../constants/Layout';
import { LIGHTBLUE } from '../constants/Colors';
import LocationDropdown from '../components/LocationDropdown';

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
    <ScrollView contentContainerStyle={styles.carouselContainerStyle}>
      <View
        style={
          (styles.dropdownView,
          {
            ...(Platform.OS !== 'android' && {
              zIndex: 99,
            }),
          })
        }
      >
        <LocationDropdown />
      </View>
      <AQChart {...{ AQ }} />
      <AQChart {...{ AQ }} />
      <AQChart {...{ AQ }} />
      <AQChart {...{ AQ }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  carouselContainerStyle: {
    minHeight: height,
    alignItems: 'center',
  },
  dropdownView: {
    width: width,
    height: height * 0.1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

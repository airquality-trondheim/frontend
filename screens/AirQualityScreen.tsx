import { View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import AQChart from '../components/airquality/AQChart';
import { height, width } from '../constants/Layout';
import LocationDropdown from '../components/LocationDropdown';

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
          <View style={styles.dropdownView}>
            <LocationDropdown />
          </View>
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
  scrollStyle: {
    height: height * 1.8,
  },
  dropdownView: {
    width: width,
    height: height * 0.1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    zIndex: 999,
  },
});

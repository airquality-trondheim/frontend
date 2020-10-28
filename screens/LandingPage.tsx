import React from 'react';
import { View, StyleSheet } from 'react-native';
import AirQualityInfo from '../components/airquality/AirQualityInfo';
import LandingPageCarousel from '../components/LandingPageCarousel';
import LocationDropdown from '../components/LocationDropdown';
import { height } from '../constants/Layout';

function LandingPage() {
  return (
    <View style={styles.screenStyle}>
      <View style={styles.topBox}>
        <LocationDropdown />
        <AirQualityInfo />
      </View>
      <LandingPageCarousel />
    </View>
  );
}

export default LandingPage;

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    alignItems: 'center',
  },
  topBox: {
    height: height * 0.3,
    marginTop: 10,
    marginBottom: 70,
  },
});

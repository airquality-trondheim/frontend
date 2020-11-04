import React from 'react';
import { View, StyleSheet } from 'react-native';
import AirQualityInfo from '../components/airquality/AirQualityInfo';
import LandingPageCarousel from '../components/LandingPageCarousel';
import LocationDropdown from '../components/LocationDropdown';

function LandingPage() {
  return (
    <View accessibilityLabel={'HomeScreen'} style={styles.screenStyle}>
      <LocationDropdown />
      <AirQualityInfo />
      <LandingPageCarousel />
    </View>
  );
}

export default LandingPage;

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

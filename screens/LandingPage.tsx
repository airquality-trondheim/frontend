import React from 'react';
import { View, StyleSheet } from 'react-native';
import InfoCard from '../components/InfoCard';
import LandingPageCarousel from '../components/LandingPageCarousel';
import { getWeatherDataForLocation } from '../queries/weather';

function LandingPage() {
  return (
    <View style={styles.screenStyle}>
      <InfoCard />
      <LandingPageCarousel />
      {getWeatherDataForLocation(63, 10)}
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

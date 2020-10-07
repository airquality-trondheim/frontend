import React from 'react';
import { View, StyleSheet } from 'react-native';
import InfoCard from '../components/InfoCard';
import LandingPageCarousel from '../components/LandingPageCarousel';

function LandingPage() {
  return (
    <View style={styles.screenStyle}>
      <InfoCard />
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

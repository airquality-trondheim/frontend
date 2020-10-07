import React from 'react';
import { View, StyleSheet } from 'react-native';
import CompetitionPageCarousel from '../components/CompetitionPageCarousel';

function CompetitionPage() {
  return (
    <View style={styles.screenStyle}>
      {/*<CarouselItem headerText="Hei" />*/}
      <CompetitionPageCarousel />
    </View>
  );
}

export default CompetitionPage;

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

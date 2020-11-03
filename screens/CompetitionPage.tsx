import React from 'react';
import { View, StyleSheet } from 'react-native';
import CompetitionPageCarousel from '../components/CompetitionPageCarousel';
import ProgressCircle from '../components/ProgressCircle';
import CompetitionInfo from '../components/CompetitionInfo';

function CompetitionPage() {
  return (
    <View style={styles.screenStyle}>
      <ProgressCircle />
      <CompetitionPageCarousel />
      <CompetitionInfo />
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

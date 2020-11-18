import React from 'react';
import { View, StyleSheet } from 'react-native';
import CompetitionPageCarousel from '../components/competition/CompetitionPageCarousel';
import ProgressCircle from '../components/competition/ProgressCircle';
import CompetitionInfo from '../components/competition/CompetitionInfo';

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

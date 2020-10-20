import React from 'react';
import { View, StyleSheet } from 'react-native';
import { width, carouselHeight } from '../constants/Layout';
import AchievementCard from './Achievements/AchievementCard';
import LeaderboardCardWithModal from './leaderboard/LeaderboardCard';

function CompetitionPageCarousel() {
  return (
    <View style={styles.carouselContainerStyle}>
      <LeaderboardCardWithModal />
      <AchievementCard />
    </View>
  );
}

export default CompetitionPageCarousel;

const styles = StyleSheet.create({
  carouselContainerStyle: {
    height: carouselHeight,
    width: width,
    justifyContent: 'space-evenly',
    display: 'flex',
    flexDirection: 'row',
  },
});

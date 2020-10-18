import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { width, height, carouselHeight } from '../constants/Layout';
import AchievementCard from './AchievementCard';
import { CarouselItem } from './CarouselItem';
import LeaderboardCardWithModal from './LeaderBoardCardWithModal';

function CompetitionPageCarousel() {
  return (
    <View style={styles.carouselContainerStyle}>
      <ScrollView horizontal>
        <LeaderboardCardWithModal />
        <AchievementCard />
        <CarouselItem rightMostItem headerText="Konkurranser"></CarouselItem>
      </ScrollView>
    </View>
  );
}

export default CompetitionPageCarousel;

const styles = StyleSheet.create({
  carouselContainerStyle: {
    height: carouselHeight,
    width: width,
  },
});

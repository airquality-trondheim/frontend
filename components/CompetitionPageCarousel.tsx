import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { width } from '../constants/Layout';
import { CarouselItem } from './CarouselItem';
import LeaderboardCardWithModal from './LeaderboardCardWithModal';

function CompetitionPageCarousel() {
  return (
    <View style={styles.carouselContainerStyle}>
      <ScrollView horizontal>
        <LeaderboardCardWithModal />
        <CarouselItem headerText="Bragder"></CarouselItem>
        <CarouselItem rightMostItem headerText="Konkurranser"></CarouselItem>
      </ScrollView>
    </View>
  );
}

export default CompetitionPageCarousel;

const styles = StyleSheet.create({
  carouselContainerStyle: {
    height: 205,
    width: width,
  },
});

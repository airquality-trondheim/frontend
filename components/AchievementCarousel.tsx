import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import { width } from '../constants/Layout';
import { CarouselItem } from './CarouselItem';
import AchievementCard from './AchievementCard';

function AchievementCarousel() {
  return (
    <View style={styles.carouselContainerStyle}>
      <ScrollView horizontal>
        <CarouselItem leftMostItem headerText="Toppliste">
          <Text>Dette er de beste spillerne!</Text>
        </CarouselItem>
        <AchievementCard></AchievementCard>
        <CarouselItem rightMostItem headerText="Statistikk"></CarouselItem>
      </ScrollView>
    </View>
  );
}

export default AchievementCarousel;

const styles = StyleSheet.create({
  carouselContainerStyle: {
    height: 205,
    width: width,
  },
});

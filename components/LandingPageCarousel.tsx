import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { CarouselItem } from './CarouselItem';
import { height, width } from '../constants/Layout';
import WeatherCarousel from './weatherCarousel';

export default function LandingPageCarousel() {
  return (
    <View style={styles.carouselContainerStyle}>
      <ScrollView horizontal>
        <CarouselItem leftMostItem headerText="Vær">
          <WeatherCarousel />
        </CarouselItem>
        <CarouselItem headerText="Luft"></CarouselItem>
        <CarouselItem rightMostItem headerText="Pollen"></CarouselItem>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  carouselContainerStyle: {
    height: height * 0.5,
    width: width,
    alignSelf: 'flex-start',
  },
});

import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import { width } from '../constants/Layout';
import { CarouselItem } from './CarouselItem';

function LandingPageCarousel() {
  return (
    <View style={styles.carouselContainerStyle}>
      <ScrollView horizontal>
        <CarouselItem leftMostItem headerText="Vær">
          <Text>Dette er været</Text>
        </CarouselItem>
        <CarouselItem headerText="Luft"></CarouselItem>
        <CarouselItem rightMostItem headerText="Pollen"></CarouselItem>
      </ScrollView>
    </View>
  );
}

export default LandingPageCarousel;

const styles = StyleSheet.create({
  carouselContainerStyle: {
    height: 205,
    width: width,
  },
});

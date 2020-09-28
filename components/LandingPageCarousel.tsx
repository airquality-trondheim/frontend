import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { width } from '../constants/Layout';
import { getWeatherDataForLocation } from '../queries/weather';
import { CarouselItem } from './CarouselItem';

function LandingPageCarousel() {
  return (
    <View style={styles.carouselContainerStyle}>
      <ScrollView horizontal>
        <TouchableOpacity
          onPress={() => getWeatherDataForLocation(10.4359, 63.4099)}
        >
          <CarouselItem leftMostItem headerText="Vær">
            <Text>Dette er været</Text>
          </CarouselItem>
        </TouchableOpacity>
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

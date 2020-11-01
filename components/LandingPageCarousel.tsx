import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { CarouselItem } from './CarouselItem';
import { carouselHeight, width } from '../constants/Layout';
import WeatherCarousel from './weather/WeatherMain';
import { useNavigation } from '@react-navigation/native';

export default function LandingPageCarousel() {
  const navigation = useNavigation();
  return (
    <View style={styles.carouselContainerStyle}>
      <TouchableOpacity onPress={() => navigation.navigate('WeatherScreen')}>
        <CarouselItem headerText="Vær">
          <WeatherCarousel />
        </CarouselItem>
      </TouchableOpacity>
      <TouchableOpacity>
        <CarouselItem headerText="Luft"></CarouselItem>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  carouselContainerStyle: {
    height: carouselHeight,
    width: width,
    justifyContent: 'space-evenly',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30,
  },
});

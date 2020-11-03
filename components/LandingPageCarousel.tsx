import React from 'react';
import AQCard from './airquality/AirQualityCard';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { CarouselItem } from './CarouselItem';
import { height, width } from '../constants/Layout';
import { useNavigation } from '@react-navigation/native';
import WeatherCarousel from './weather/WeatherMain';

export default function LandingPageCarousel() {
  const navigation = useNavigation();
  return (
    <View style={styles.carouselContainerStyle}>
      <TouchableOpacity onPress={() => navigation.navigate('WeatherScreen')}>
        <CarouselItem headerText="Vær">
          <WeatherCarousel />
        </CarouselItem>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('AirQualityScreen')}>
        <CarouselItem headerText="Luft">
          <AQCard />
        </CarouselItem>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  carouselContainerStyle: {
    height: height * 0.3,
    width: width,
    justifyContent: 'space-evenly',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 0,
  },
});

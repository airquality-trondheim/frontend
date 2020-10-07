import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RootAction } from '../actions/types';
import { getWeatherData } from '../actions/weatherActions';

import { RootState } from '../reducers';
import { CarouselItem } from './CarouselItem';
import { cloudy } from '../assets/images/index';
import { height, width } from '../constants/Layout';

type WeatherProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function LandingPageCarousel(props: WeatherProps) {
  return (
    <View style={styles.carouselContainerStyle}>
      {props.fetchWeatherData(63.4099, 10.4359)}
      <ScrollView horizontal>
        <TouchableOpacity
          onPress={() => props.fetchWeatherData(63.4099, 10.4359)}
        >
          <CarouselItem leftMostItem headerText="Vær">
            <Text style={styles.headerStyle}>Tiller</Text>
            {props.weatherData.length > 0 ? (
              <>
                <Text>
                  {'kl.' +
                    props.weatherData[0].time.split('T')[1].split(':')[0]}
                </Text>
                <Image source={cloudy} style={styles.iconStyle} />
                <Text>{props.weatherData[0].temp}℃</Text>
                <Text>{props.weatherData[0].rain} mm</Text>
              </>
            ) : (
              <></>
            )}
          </CarouselItem>
        </TouchableOpacity>
        <CarouselItem headerText="Luft"></CarouselItem>
        <CarouselItem rightMostItem headerText="Pollen"></CarouselItem>
      </ScrollView>
    </View>
  );
}

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => {
  return {
    fetchWeatherData: (latitude: number, longitude: number) => {
      getWeatherData(latitude, longitude, dispatch);
    },
  };
};

const mapStateToProps = (state: RootState) => {
  return {
    lastFetched: state.weather.lastFetched,
    weatherData: state.weather.data,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LandingPageCarousel);

const styles = StyleSheet.create({
  carouselContainerStyle: {
    height: height * 0.5,
    width: width,
    alignSelf: 'flex-start',
  },
  headerStyle: {
    fontSize: 20,
  },
  iconStyle: {
    height: 100,
    width: 100,
  },
});

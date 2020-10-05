import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RootAction } from '../actions/types';
import { getWeatherData } from '../actions/weatherActions';
import { width } from '../constants/Layout';
import { RootState } from '../reducers';
import { CarouselItem } from './CarouselItem';

type WeatherProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function LandingPageCarousel(props: WeatherProps) {
  return (
    <View style={styles.carouselContainerStyle}>
      <ScrollView horizontal>
        <TouchableOpacity
          onPress={() => props.fetchWeatherData(10.4359, 63.4099)}
        >
          <CarouselItem leftMostItem headerText="Vær">
            <Text>Dette er været</Text>
            <Text>{props.lastFetched.toUTCString()}</Text>
            {props.weatherData.length > 0 ? (
              <>
                <Text>Temp: {props.weatherData[0].temp}℃</Text>
                <Text>Rain: {props.weatherData[0].rain}</Text>
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
    height: 205,
    width: width,
  },
});

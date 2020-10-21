import React, { useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import WeatherCarouselItem from '../components/weather/WeatherCarouselItem';
import WeatherComponentBig from '../components/weather/WeatherPageItemBig';
import { CAROUSELITEM } from '../constants/Colors';
import { height, width } from '../constants/Layout';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RootAction } from '../actions/types';
import { getWeatherData } from '../actions/weatherActions';
import { RootState } from '../reducers';
import { WeatherElement } from '../types/_types';

type WeatherProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function WeatherScreen(props: WeatherProps) {
  const { today, tomorrow, fetchWeatherData } = props;
  useEffect(() => fetchWeatherData(63.4099, 10.4359), [fetchWeatherData]);

  return (
    <View style={styles.screenStyle}>
      <View style={styles.mainComponent}>
        <WeatherComponentBig />
      </View>
      <View>
        {today.length > 0 ? (
          <View>
            <Text style={styles.text}>I dag</Text>
            <ScrollView horizontal style={styles.scroll}>
              {today.map((weather: WeatherElement, index: number) => (
                <View key={index} style={styles.containerStyle}>
                  <WeatherCarouselItem key={index} weather={weather} />
                </View>
              ))}
            </ScrollView>
            <Text style={styles.text}>I morgen</Text>
            <ScrollView horizontal style={styles.scroll}>
              {tomorrow.map((weather: WeatherElement, index: number) => (
                <View key={index} style={styles.containerStyle}>
                  <WeatherCarouselItem key={index} weather={weather} />
                </View>
              ))}
            </ScrollView>
          </View>
        ) : (
          <></>
        )}
      </View>
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
    today: state.weather.today,
    tomorrow: state.weather.tomorrow,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherScreen);

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    justifyContent: 'space-evenly',
    padding: 8,
    marginBottom: 8,
  },
  mainComponent: {
    width: width,
    fontSize: 40,
    height: height * 0.4,
  },
  containerStyle: {
    backgroundColor: CAROUSELITEM,
    width: 0.15 * height,
    height: 0.15 * height,
    borderRadius: 20,
    overflow: 'hidden',
    marginLeft: 5,
    marginRight: 5,
    paddingTop: 8,
    padding: 8,
    elevation: 5,
  },
  text: {
    marginTop: 15,
    marginLeft: 10,
    fontSize: 20,
  },
  scroll: {
    height: height * 0.18,
    marginTop: 12,
  },
});

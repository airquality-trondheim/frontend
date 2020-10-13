import React, { useEffect } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RootAction } from '../actions/types';
import { getWeatherData } from '../actions/weatherActions';
import { RootState } from '../reducers';
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

type WeatherProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  weather;

type weather = {
  icon: boolean;
  count: number;
};

function WeatherComponent(props: WeatherProps) {
  const { weatherData, fetchWeatherData } = props;
  useEffect(() => fetchWeatherData(63.4099, 10.4359), [fetchWeatherData]);

  return (
    <View>
      {weatherData.length > 0 ? (
        <View style={styles.weather}>
          <View style={styles.iconHead}>
            <Text>
              {'kl. ' +
                weatherData[props.count].time.split('T')[1].split(':')[0]}
            </Text>
            <Image
              source={
                require('../assets/images/png/partlycloudy_day.png') /*{ uri: props.symbol }*/
              }
              style={styles.weatherIconStyle}
            />
          </View>
          {props.icon ? (
            <View style={styles.weatherInfo}>
              <FontAwesome5
                name="thermometer-half"
                backgroundColor="pink"
                style={styles.icon}
              />
              <Fontisto name="blood-drop" style={styles.icon} />
            </View>
          ) : (
            <></>
          )}
          <View style={styles.weatherInfo}>
            <Text style={styles.text}>{weatherData[props.count].temp} ℃</Text>
            <Text style={styles.text}>{weatherData[props.count].rain} mm</Text>
          </View>
        </View>
      ) : (
        <></>
      )}
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

export default connect(mapStateToProps, mapDispatchToProps)(WeatherComponent);

const styles = StyleSheet.create({
  weatherIconStyle: {
    height: 50,
    width: 50,
  },
  component: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  weather: {
    display: 'flex',
    flexDirection: 'row',
    borderTopWidth: 3,
    borderTopColor: 'lightgrey',
  },
  iconHead: {
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
  },
  weatherInfo: {
    marginTop: 16,
    display: 'flex',
    flexDirection: 'column',
  },
  weatherLine: {
    marginRight: 8,
    display: 'flex',
    flexDirection: 'row',
  },
  icon: {
    color: '#8cc9ff',
    fontSize: 22,
  },
  text: {
    fontSize: 14,
    marginLeft: 8,
    marginTop: 2,
  },
});

import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RootAction } from '../actions/types';
import { getWeatherData } from '../actions/weatherActions';
import { RootState } from '../reducers';
import WeatherComponent from './WeatherComponent';

type WeatherProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

export function WeatherCarousel(props: WeatherProps) {
  const { weatherData, fetchWeatherData } = props;
  const icon = 'logo';
  useEffect(() => fetchWeatherData(63.4099, 10.4359), [fetchWeatherData]);

  return (
    <TouchableOpacity
      style={styles.component}
      onPress={() => fetchWeatherData(63.4099, 10.4359)}
    >
      {weatherData.length > 0 ? (
        <View>
          <WeatherComponent icon={true} count={1} />
          <WeatherComponent icon={true} count={1} />
          <WeatherComponent icon={true} count={1} />
        </View>
      ) : (
        <></>
      )}
    </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(WeatherCarousel);

const styles = StyleSheet.create({
  component: {
    display: 'flex',
    alignItems: 'flex-start',
  },
});

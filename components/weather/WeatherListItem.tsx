import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RootAction } from '../../actions/types';
import { getWeatherData } from '../../actions/weatherActions';
import { RootState } from '../../reducers';
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { WEATHERICON } from '../../constants/Colors';
import { WeatherElement } from '../../types/_types';

type WeatherProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & { count: number };

function WeatherComponentSmall(props: WeatherProps) {
  const { currentLocation, count, tomorrow, today, fetchWeatherData } = props;
  const [weather, setWeather] = useState<WeatherElement[]>(today);
  const unmounted = useRef(false);

  useEffect(() => {
    return () => {
      unmounted.current = true;
    };
  }, []);

  useEffect(() => {
    if (currentLocation) {
      fetchWeatherData(currentLocation.latitude, currentLocation.longitude);
    }
  }, [fetchWeatherData, currentLocation]);

  useEffect(() => {
    if (!unmounted.current) {
      setWeather(today.concat(tomorrow));
    }
  }, [today, tomorrow]);

  return (
    <>
      {weather.length > 0 ? (
        <View style={styles.weather}>
          <View style={styles.iconHead}>
            <Text>{'kl. ' + weather[count].time.substring(11, 13)}</Text>
            <Image
              source={{ uri: weather[count].symbol }}
              style={styles.weatherIconStyle}
            />
          </View>
          <View style={styles.weatherInfo}>
            <FontAwesome5 name="thermometer-half" style={styles.icon} />
            <Fontisto name="blood-drop" style={styles.icon} />
          </View>
          <View style={styles.weatherInfo}>
            <Text style={styles.text}>{weather[count].temp} ℃</Text>
            <Text style={styles.text}>{weather[count].rain} mm</Text>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
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
    today: state.weather.today,
    tomorrow: state.weather.tomorrow,
    currentLocation: state.locations.currentLocation,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WeatherComponentSmall);

const styles = StyleSheet.create({
  weatherIconStyle: {
    height: 50,
    width: 50,
    marginRight: 8,
    marginBottom: 2,
  },
  weather: {
    display: 'flex',
    flexDirection: 'row',
  },
  iconHead: {
    marginTop: 8,
  },
  weatherInfo: {
    marginTop: 16,
  },
  icon: {
    color: WEATHERICON,
    fontSize: 22,
    marginTop: 2,
  },
  text: {
    fontSize: 16,
    marginLeft: 8,
    marginTop: 3,
  },
});

import React, { useEffect } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RootAction } from '../../actions/types';
import { getWeatherData } from '../../actions/weatherActions';
import { RootState } from '../../reducers';
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto, Feather } from '@expo/vector-icons';
import { width } from '../../constants/Layout';
import { WEATHERICON } from '../../constants/Colors';

type WeatherProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function WeatherComponentBig(props: WeatherProps) {
  const { weatherData, fetchWeatherData } = props;
  useEffect(() => fetchWeatherData(63.4099, 10.4359), [fetchWeatherData]);

  return (
    <>
      <Text style={styles.muncipalityHeader}> Tiller</Text>
      {weatherData.length > 0 ? (
        <View style={styles.weather}>
          <View style={styles.iconHead}>
            <Text style={styles.header}> Nå </Text>
            <Image
              source={{ uri: weatherData[0].symbol }}
              style={styles.weatherIconStyle}
            />
          </View>
          <View style={styles.weatherInfo}>
            <View style={styles.weatherLine}>
              <FontAwesome5 name="thermometer-half" style={styles.icon} />
              <Fontisto name="blood-drop" style={styles.icon} />
              <Feather name="wind" style={styles.icon} />
            </View>
            <View style={styles.weatherLine}>
              <Text style={styles.text}>{weatherData[0].temp} ℃</Text>
              <Text style={styles.text}>{weatherData[0].rain} mm</Text>
              <Text style={styles.text}>{weatherData[0].windSpeed} m/s</Text>
            </View>
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
    weatherData: state.weather.today,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WeatherComponentBig);

const styles = StyleSheet.create({
  weatherIconStyle: {
    height: 170,
    width: 170,
    marginRight: 40,
  },

  weather: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: width,
  },
  header: {
    fontSize: 24,
    marginLeft: -12,
  },
  muncipalityHeader: {
    fontSize: 24,
    alignSelf: 'center',
    margin: 16,
  },
  iconHead: {
    marginTop: 8,
    display: 'flex',
  },
  weatherInfo: {
    marginTop: 32,
    marginRight: 8,
    display: 'flex',
    flexDirection: 'row',
  },
  weatherLine: {
    marginTop: 12,
  },
  icon: {
    color: WEATHERICON,
    fontSize: 34,
    marginTop: 12,
  },
  text: {
    fontSize: 24,
    marginLeft: 8,
    marginTop: 12,
  },
});

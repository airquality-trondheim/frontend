import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { BOTTOMBORDER } from '../../constants/Colors';
import { WeatherElement } from '../../types/_types';

function WeatherCarouselItem({ weather }: { weather: WeatherElement }) {
  const { time, rain, temp, windSpeed, symbol } = weather;

  return (
    <>
      <View style={styles.clockHeader}>
        <Text>{'kl. ' + time.substring(11, 13)}</Text>
      </View>
      <View style={styles.weather}>
        <View style={styles.iconHead}>
          <Image source={{ uri: symbol }} style={styles.weatherIconStyle} />
        </View>
        <View style={styles.weatherInfo}>
          <Text style={styles.text}>{temp} ℃</Text>
          <Text style={styles.text}>{rain} mm</Text>
          <Text style={styles.text}>{windSpeed} m/s</Text>
        </View>
      </View>
    </>
  );
}

export default WeatherCarouselItem;

const styles = StyleSheet.create({
  weatherIconStyle: {
    height: 50,
    width: 50,
  },
  weather: {
    display: 'flex',
    flexDirection: 'row',
  },
  clockHeader: {
    borderBottomWidth: 2,
    borderBottomColor: BOTTOMBORDER,
    alignItems: 'center',
    width: '100%',
  },
  iconHead: {
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
  },
  weatherInfo: {
    marginTop: 4,
  },

  text: {
    fontSize: 14,
    marginTop: 4,
  },
});

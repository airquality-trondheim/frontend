import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { BOTTOMBORDER } from '../../constants/Colors';
import WeatherComponentSmall from './WeatherListItem';

export default function WeatherCarousel() {
  const navigation = useNavigation();
  const weatherElemts = [0, 1, 2];
  return (
    <TouchableOpacity onPress={() => navigation.navigate('WeatherScreen')}>
      {weatherElemts.map((index) => (
        <View key={index} style={styles.weatherElement}>
          <WeatherComponentSmall count={index} />
        </View>
      ))}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  weatherElement: {
    borderTopWidth: 3,
    borderTopColor: BOTTOMBORDER,
  },
});

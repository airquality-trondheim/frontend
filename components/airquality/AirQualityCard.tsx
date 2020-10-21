import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import { width, height } from '../../constants/Layout';
import { BarChart } from 'react-native-chart-kit';
import AQBarChart from './BarChart';

function AQCard() {
  return (
    <View>
      <AQBarChart />
    </View>
  );
}

export default AQCard;

const styles = StyleSheet.create({
  chart: {
    height: 40,
    width: 50,
  },
});

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { width } from '../../constants/Layout';
import { BarChart } from 'react-native-chart-kit';
import { ProgressPlugin } from 'webpack';

function AQBarChart() {
  const types = ['AQI', 'PM10', 'PM2.5', 'NO2'];
  const airData = ['low', 'medium', 'high', 'very high'];

  return <View></View>;
}

export default AQBarChart;

const styles = StyleSheet.create({
  chart: {},
});

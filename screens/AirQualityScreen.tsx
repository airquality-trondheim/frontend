import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import AQLineChart from '../components/airquality/AQLineChart';
import { height } from '../constants/Layout';
import { LIGHTBLUE } from '../constants/Colors';

const YAxis = () => {
  return (
    <View style={styles.barYAxis}>
      <Text>4</Text>
      <Text>3</Text>
      <Text>2</Text>
      <Text>1</Text>
      <Text>0</Text>
    </View>
  );
};

export default function AirQualityScreen() {
  return (
    <View style={styles.carouselContainerStyle}>
      <Text>AQ</Text>
      <Text style={styles.text}>AQI</Text>
      <View style={styles.chartContainer}>
        <YAxis />
        <ScrollView style={styles.chart} horizontal>
          <AQLineChart />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  carouselContainerStyle: {
    height: height,
    borderWidth: 2,
  },
  barYAxis: {
    backgroundColor: LIGHTBLUE,
    width: 30,
    height: height * 0.3,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginRight: 4,
    marginLeft: 4,
  },
  chartContainer: {
    height: height * 0.3,
    display: 'flex',
    flexDirection: 'row',
  },
  chart: {
    marginLeft: 4,
  },
  text: {
    fontSize: 16,
  },
});

import React from 'react';
import { View, StyleSheet } from 'react-native';
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

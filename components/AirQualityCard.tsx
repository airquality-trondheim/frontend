import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import { width, height } from '../constants/Layout';
import { BarChart } from 'react-native-chart-kit';

function AQCard() {
  return (
    <View>
      <BarChart
        data={{
          labels: ['AQI', 'PM2.5', 'PM10', 'NO2'],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={width * 0.4} // from react-native
        height={height * 0.2}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
}

export default AQCard;

const styles = StyleSheet.create({
  chart: {},
});

/*  eslint-disable @typescript-eslint/no-shadow */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LineChart, XAxis } from 'react-native-svg-charts';
import { Circle } from 'react-native-svg';
import {
  DANGER1,
  DANGER2,
  DANGER3,
  DANGER4,
  DARKGRAY,
} from '../../constants/Colors';
import { height, width } from '../../constants/Layout';

export default function AQLineChart() {
  const data = [
    1,
    2,
    4,
    3,
    2,
    2,
    3,
    1,
    1,
    1,
    3,
    1,
    1,
    2,
    3,
    4,
    1,
    4,
    2,
    2,
    1,
    1,
    1,
  ];
  const axesSvg = { fontSize: 10, fill: 'grey' };

  const Decorator = ({
    x,
    y,
    data,
  }: {
    x: any;
    y: any;
    data: Array<number>;
  }) => {
    return data.map((value, index) => (
      <Circle
        key={index}
        cx={x(index)}
        cy={y(value)}
        r={5}
        fill={
          value === 1
            ? DANGER1
            : value === 2
            ? DANGER2
            : value == 3
            ? DANGER3
            : DANGER4
        }
      />
    ));
  };
  return (
    <View style={styles.lineChart}>
      <LineChart
        style={{ height: height * 0.3, marginHorizontal: 10 }}
        data={data}
        svg={{ stroke: 'gray' }}
        contentInset={{ top: 20, bottom: 20 }}
        yMin={0}
        yMax={4}
      >
        <Decorator />
      </LineChart>
      <XAxis
        style={{ marginHorizontal: 10, marginVertical: -25, height: 40 }}
        data={data}
        formatLabel={(value, index) => index}
        //contentInset={{ left: 10, right: 10 }}
        svg={axesSvg}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  lineChart: {
    width: width * 2,
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: DARKGRAY,
    marginBottom: 35,
  },
});

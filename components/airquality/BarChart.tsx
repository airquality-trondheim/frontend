import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-svg-charts';
import { PathProps } from 'react-native-svg';
import {
  DANGER1,
  DANGER2,
  DANGER3,
  DANGER4,
  LIGHTGRAY,
} from '../../constants/Colors';
import { carouselHeight } from '../../constants/Layout';

export type AQData = {
  value: number;
  type: string;
};
type AQColorData = {
  value: number;
  svg: PathProps;
  type: string;
};

export function colorFill(data: Array<AQData>) {
  const newData: Array<AQColorData> = [];
  data.map((element) => {
    let color: string = 'white';
    if (element.value == 1) {
      color = DANGER1;
    } else if (element.value == 2) {
      color = DANGER2;
    } else if (element.value == 3) {
      color = DANGER3;
    } else {
      color = DANGER4;
    }
    newData.push({
      value: element.value,
      svg: { fill: color },
      type: element.type,
    });
  });
  return newData;
}

export default function AQBarChart(props: { data: Array<AQData> }) {
  const levels = colorFill(props.data);
  return (
    <View>
      <BarChart
        style={{ height: carouselHeight * 0.3 }}
        data={levels}
        gridMin={0}
        svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
        yAccessor={({ item }) => item.value}
        contentInset={{ top: 20, bottom: 20 }}
        spacingInner={0.2}
      ></BarChart>
      <Text style={styles.border} />
      <View style={styles.xAx}>
        <Text style={styles.text}>AQI</Text>
        <Text style={styles.text}>PM10</Text>
        <Text style={styles.text}>PM2.5</Text>
        <Text style={styles.text}>NO2</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  border: {
    borderTopColor: LIGHTGRAY,
    borderTopWidth: 3,
    marginTop: -20,
  },
  xAx: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 2,
  },
  text: {
    fontSize: 11,
    marginTop: -15,
  },
});

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarChart, Grid, XAxis } from 'react-native-svg-charts';
import { PathProps } from 'react-native-svg';
import {
  AQHIGH,
  AQLOW,
  AQMEDIUM,
  AQVERYHIGH,
  LIGHTGRAY,
} from '../../constants/Colors';
import { carouselHeight } from '../../constants/Layout';
import * as scale from 'd3-scale';

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
      color = AQLOW;
    } else if (element.value == 2) {
      color = AQMEDIUM;
    } else if (element.value == 3) {
      color = AQHIGH;
    } else {
      color = AQVERYHIGH;
    }
    newData.push({
      value: element.value,
      svg: { fill: color },
      type: element.type,
    });
  });
  return newData;
}

export default function AQBarChart() {
  const data: Array<AQData> = [
    {
      value: 1,
      type: 'pm10',
    },
    {
      value: 2,
      type: 'pm10',
    },
    {
      value: 3,
      type: 'pm10',
    },
    {
      value: 4,
      type: 'pm10',
    },
  ];
  const levels = colorFill(data);
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

/*import { View, StyleSheet, Text } from 'react-native';
import { width } from '../../constants/Layout';
import { BarChart } from 'react-native-chart-kit';
import { ProgressPlugin } from 'webpack';

function AQBarChart() {

  const data = {
    labels: ["AQI", "PM10", "PM2.5", "NO2"],
    datasets: [ { data: [1, 3, 2, 3] }]

  };

  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 3, // optional, default 3
    barPercentage: 1,
    useShadowColorFromDataset: false, // optional
    showValuesOnTopOfBars:true,
    propsForHorizontalLabels: {}
  };
  return (
    <View style={{
        marginVertical: 1,
        borderRadius: 0,
        display:'flex',
        flexDirection:'column',    
        flex:1,
        
    }}>
      <BarChart
        data={data}
        width={width*0.4}
        fromZero={true}
        style={{}}
        yAxisLabel=''
        yAxisSuffix=''
        height={120}
        withInnerLines={true}
        yLabelsOffset={-12}
        showValuesOnTopOfBars={true}
        withHorizontalLabels={false}
        chartConfig={chartConfig}
        
      />
    </View>
  );
}

export default AQBarChart;

const styles = StyleSheet.create({
  chart: {},
}); */

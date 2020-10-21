import React from 'react';
import { View } from 'react-native';
import { BarChart, Grid } from 'react-native-svg-charts';

export default function AQBarChart() {
  const fill = 'rgb(134, 65, 244)';
  const data = [49, 30, 40, 50]; //[{value:50, svg:{fill:'rgb(0, 65, 244}'}},40,30,40]

  return (
    <View>
      <BarChart
        style={{ height: 40, width: 100 }}
        data={data}
        yMin={0}
        spacingInner={0.5}
        spacingOuter={0.9}
        svg={{ fill }}
      >
        <Grid />
      </BarChart>
    </View>
  );
}
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

import React, { useEffect, useRef, useState } from 'react';
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
import { connect } from 'react-redux';
import { RootState } from '../../reducers';

type AQColorData = {
  value: number;
  svg: PathProps;
};

export function colorFill(data: Array<number>) {
  const newData: Array<AQColorData> = [];
  data.map((element) => {
    let color: string = 'white';
    if (element < 2) {
      color = DANGER1;
    } else if (element < 3) {
      color = DANGER2;
    } else if (element < 4) {
      color = DANGER3;
    } else {
      color = DANGER4;
    }
    newData.push({
      value: element,
      svg: { fill: color },
    });
  });
  return newData;
}

type AQBarChartProps = ReturnType<typeof mapStateToProps> & {
  now: boolean;
};

function AQBarChart(props: AQBarChartProps) {
  const { AQI, NO2_AQI, PM10_AQI, PM25_AQI, index, now } = props;
  const unmounted = useRef(false);
  const [data, setData] = useState<number[]>([1, 1, 1, 1]);

  useEffect(() => {
    return () => {
      unmounted.current = true;
    };
  }, []);

  useEffect(() => {
    if (!unmounted.current && AQI.todayData.length > 0 && index >= 0) {
      if (index + 1 < AQI.todayData.length) {
        setData([
          AQI.todayData[now ? index : index + 1].value,
          PM25_AQI.todayData[now ? index : index + 1].value,
          PM10_AQI.todayData[now ? index : index + 1].value,
          NO2_AQI.todayData[now ? index : index + 1].value,
        ]);
      } else {
        if (now) {
          setData([
            AQI.todayData[index].value,
            PM25_AQI.todayData[index].value,
            PM10_AQI.todayData[index].value,
            NO2_AQI.todayData[index].value,
          ]);
        } else {
          setData([
            AQI.tomorrowData[0].value,
            PM25_AQI.tomorrowData[0].value,
            PM10_AQI.tomorrowData[0].value,
            NO2_AQI.tomorrowData[0].value,
          ]);
        }
      }
    }
  }, [
    AQI.todayData,
    AQI.tomorrowData,
    NO2_AQI.todayData,
    NO2_AQI.tomorrowData,
    PM10_AQI.todayData,
    PM10_AQI.tomorrowData,
    PM25_AQI.todayData,
    PM25_AQI.tomorrowData,
    index,
    now,
  ]);

  return (
    <View>
      <BarChart
        style={{ height: carouselHeight * 0.3 }}
        data={colorFill(data)}
        gridMin={0}
        svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
        yAccessor={({ item }) => item.value}
        contentInset={{ top: 20, bottom: 20 }}
        spacingInner={0.2}
        yMin={0}
        yMax={4}
      ></BarChart>
      <Text style={styles.border} />
      <View style={styles.xAx}>
        <Text style={styles.text}>AQI</Text>
        <Text style={styles.text}>PM2.5</Text>
        <Text style={styles.text}>PM10</Text>
        <Text style={styles.text}>NO2</Text>
      </View>
    </View>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    AQI: state.airquality.AQI,
    NO2_AQI: state.airquality.NO2_AQI,
    PM10_AQI: state.airquality.PM10_AQI,
    PM25_AQI: state.airquality.PM25_AQI,
    index: state.airquality.index,
  };
};

export default connect(mapStateToProps)(AQBarChart);

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

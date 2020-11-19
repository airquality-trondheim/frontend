import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { LineChart, XAxis } from 'react-native-svg-charts';
import { Circle } from 'react-native-svg';
import { RootState } from '../../reducers';
import { Dispatch } from 'redux';
import { RootAction } from '../../actions/types';
import { getAirQualityDataForLocation } from '../../actions/airqualityActions';
import { connect } from 'react-redux';
import {
  DANGER1,
  DANGER2,
  DANGER3,
  DANGER4,
  GRAY,
  LIGHTGRAY,
} from '../../constants/Colors';
import { height, width } from '../../constants/Layout';

const Decorator = ({ x, y, data }: { x: any; y: any; data: Array<number> }) => {
  return data.map((value, index) => (
    <Circle
      key={index}
      cx={x(index)}
      cy={y(value)}
      r={5}
      fill={
        value < 2
          ? DANGER1
          : value < 3
          ? DANGER2
          : value < 4
          ? DANGER3
          : DANGER4
      }
    />
  ));
};

type AQLineChartProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    AQ: 'AQI' | 'PM10_AQI' | 'PM25_AQI' | 'NO2_AQI';
    today: boolean;
  };

function AQLineChart(props: AQLineChartProps) {
  const { currentLocation, airQuality, fetchAirQualityData, AQ, today } = props;
  const axesSvg = { fontSize: 10, fill: 'grey' };
  const [data, setData] = useState<Array<number>>([0, 0]);
  // const data: Array<number> = props.data.map((element) => element.value);
  const unmounted = useRef(false);

  useEffect(() => {
    return () => {
      unmounted.current = true;
    };
  }, []);

  useEffect(() => {
    if (currentLocation) {
      fetchAirQualityData(currentLocation.areacode);
    }
  }, [fetchAirQualityData, currentLocation]);

  useEffect(() => {
    if (!unmounted.current) {
      if (today) {
        setData(airQuality[AQ].todayData.map((element) => element.value));
      } else {
        setData(airQuality[AQ].tomorrowData.map((element) => element.value));
      }
    }
  }, [AQ, airQuality, today]);

  return (
    <View style={styles.lineChart}>
      <LineChart
        style={styles.lineStyle}
        data={data}
        svg={{ stroke: LIGHTGRAY }}
        contentInset={{ top: 20, bottom: 20, left: 15, right: 10 }}
        yMin={0}
        yMax={4}
      >
        <Decorator />
      </LineChart>
      <XAxis
        style={styles.xAxStyle}
        data={today ? airQuality[AQ].todayData : airQuality[AQ].tomorrowData}
        xAccessor={({ item }) => item.clock}
        formatLabel={(value) => value}
        contentInset={{ left: 15, right: 10 }}
        svg={axesSvg}
      />
      <Text style={styles.text}>Kl.</Text>
    </View>
  );
}

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => {
  return {
    fetchAirQualityData: (areacode: string) => {
      getAirQualityDataForLocation(dispatch, areacode);
    },
  };
};

const mapStateToProps = (state: RootState) => {
  return {
    airQuality: state.airquality,
    currentLocation: state.locations.currentLocation,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AQLineChart);

const styles = StyleSheet.create({
  lineChart: {
    width: width * 2,
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: GRAY,
    marginBottom: 35,
  },
  lineStyle: {
    height: height * 0.3,
    marginHorizontal: 10,
  },
  xAxStyle: {
    marginHorizontal: 10,
    marginVertical: -25,
    height: 40,
  },
  text: {
    fontSize: 10,
    marginTop: -18,
    color: GRAY,
  },
});

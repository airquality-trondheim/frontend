import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { LIGHTGRAY } from '../../constants/Colors';
import { carouselHeight, width } from '../../constants/Layout';
import { RootState } from '../../reducers';
import AQBarChart from './BarChart';

type AirQualityCardProps = ReturnType<typeof mapStateToProps>;

function AQCard(props: AirQualityCardProps) {
  const { AQI, NO2_AQI, PM10_AQI, PM25_AQI, index } = props;
  const unmounted = useRef(false);
  const [today, setToday] = useState<Array<number>>([1, 2, 3, 4]);
  const [tomorrow, setTomorrow] = useState<Array<number>>([1, 2, 3, 4]);
  const [types, setTypes] = useState([AQI, NO2_AQI, PM25_AQI, PM10_AQI]);

  useEffect(() => {
    return () => {
      unmounted.current = true;
    };
  }, []);

  useEffect(() => {
    if (!unmounted.current) {
      setTypes([AQI, NO2_AQI, PM25_AQI, PM10_AQI]);
    }
  }, [AQI, NO2_AQI, PM25_AQI, PM10_AQI, JSON.stringify(AQI)]);

  useEffect(() => {
    if (!unmounted.current && types[0].todayData.length > 0 && index >= 0) {
      setToday(types.map((element) => element.todayData[index].value));
      setTomorrow(types.map((element) => element.tomorrowData[index].value));
    }
  }, [index, types]);

  return (
    <View style={styles.chart}>
      <Text style={styles.border} />
      <View style={styles.container}>
        <Text>Nå </Text>
        <AQBarChart {...{ data: today }} />
        <Text>Om 1 time</Text>
        <AQBarChart {...{ data: tomorrow }} />
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

export default connect(mapStateToProps)(AQCard);

const styles = StyleSheet.create({
  chart: {
    height: carouselHeight * 0.8,
    padding: 0,
    width: width * 0.35,
  },
  border: {
    borderTopColor: LIGHTGRAY,
    borderTopWidth: 3,
    marginTop: -3,
  },
  container: {
    marginTop: -12,
  },
});

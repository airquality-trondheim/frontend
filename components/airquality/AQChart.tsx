import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import React, { useState } from 'react';
import AQLineChart from './AQLineChart';
import { height, width } from '../../constants/Layout';
import { LIGHTBLUE } from '../../constants/Colors';
import { AQIData } from '../../screens/AirQualityScreen';

export const YAxis = () => {
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

export default function AirQChart(props: { AQ: AQIData }) {
  const [today, setToday] = useState(true);
  const [tomorrow, setTomorrow] = useState(false);
  const [data, setData] = useState(props.AQ.todayData);
  function switchDay() {
    setToday(!today);
    setTomorrow(!tomorrow);
    if (!today) {
      setData(props.AQ.todayData);
    } else {
      setData(props.AQ.tomorrowData);
    }
  }

  return (
    <View style={styles.containerStyle}>
      <View style={styles.buttonContainer}>
        <Text style={styles.text}>{props.AQ.type}</Text>
        <Button
          title="I dag"
          type="clear"
          buttonStyle={tomorrow ? styles.button : styles.buttonActive}
          onPress={() => switchDay()}
        />
        <Button
          title="I morgen"
          type="clear"
          buttonStyle={today ? styles.button : styles.buttonActive}
          onPress={() => switchDay()}
        />
      </View>
      <View style={styles.chartContainer}>
        <YAxis />
        <ScrollView style={styles.chart} horizontal>
          <AQLineChart {...{ data }} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    height: height * 0.4,
    width: width,
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
    marginTop: 10,
    marginRight: 30,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  button: {
    width: width * 0.25,
    marginRight: 10,
    marginLeft: 10,
  },
  buttonActive: {
    marginRight: 10,
    marginLeft: 10,
    width: width * 0.25,
    color: 'blue',
    borderBottomWidth: 2,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
});

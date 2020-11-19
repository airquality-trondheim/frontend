import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import React, { useEffect, useRef, useState } from 'react';
import AQLineChart from './AQLineChart';
import { height, width } from '../../constants/Layout';
import { SECONDARY } from '../../constants/Colors';

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

export default function AirQChart(props: {
  name: string;
  nameNumber: string;
  AQ: 'AQI' | 'PM10_AQI' | 'PM25_AQI' | 'NO2_AQI';
}) {
  const [today, setToday] = useState(true);
  const unmounted = useRef(false);

  useEffect(() => {
    return () => {
      unmounted.current = true;
    };
  }, []);

  function switchDay() {
    if (!unmounted.current) {
      setToday(!today);
    }
  }

  return (
    <View style={styles.containerStyle}>
      <View style={styles.buttonContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{props.name}</Text>
          <Text style={styles.smallText}>{props.nameNumber}</Text>
        </View>
        <Button
          title="I dag"
          type="clear"
          buttonStyle={!today ? styles.button : styles.buttonActive}
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
          <AQLineChart AQ={props.AQ} today={today} />
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
    backgroundColor: SECONDARY,
    width: 30,
    height: height * 0.3,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginRight: 4,
    marginLeft: 4,
    paddingBottom: 10,
    marginTop: -1,
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

    marginLeft: 10,
    fontWeight: 'bold',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
  },
  smallText: {
    fontSize: 10,
    marginRight: 30,
    paddingTop: 10,
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
    color: SECONDARY,
    borderBottomWidth: 2,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
});

import { Button } from 'native-base';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getWeatherDataForLocation } from '../queries/weather';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Air Quality App</Text>
      <View style={styles.separator} />
      <Button
        color="hotpink"
        onPress={() => getWeatherDataForLocation(63, 10)}
      ></Button>
      {
        //getWeatherDataForLocation(63,10)}
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

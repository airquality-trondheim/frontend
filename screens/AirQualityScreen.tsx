import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
export default function AirQualityScreen() {
  return (
    <View style={styles.carouselContainerStyle}>
      <Text>AQ</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  carouselContainerStyle: {
    backgroundColor: 'hotpink',
  },
});

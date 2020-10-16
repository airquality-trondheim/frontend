import { View } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { TRANSPARENT } from '../constants/Colors';
import { width } from '../constants/Layout';

type CircleSectionProps = {
  color: string;
  fillPercent: number;
};

function CircleSection(props: CircleSectionProps) {
  return (
    <View style={styles.position}>
      <AnimatedCircularProgress
        size={width * 0.9}
        width={15}
        arcSweepAngle={180}
        rotation={-90}
        fill={props.fillPercent}
        prefill={props.fillPercent}
        tintColor={props.color}
        backgroundColor={TRANSPARENT}
      />
    </View>
  );
}

export default CircleSection;

const styles = StyleSheet.create({
  position: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

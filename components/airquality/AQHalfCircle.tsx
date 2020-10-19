import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Circle } from 'react-native-svg';
import {
  DANGER4,
  DANGER3,
  DANGER2,
  DANGER1,
  TRANSPARENT,
  WHITE,
  DARKGRAY,
} from '../../constants/Colors';
import CircleSection from './CircleSection';

function AQHalfCircle(props: {
  fill: number;
  size: number;
  insideText?: string;
  belowText?: string;
}) {
  return (
    <View style={styles.center}>
      <View style={{ height: props.size / 2 }}>
        <CircleSection color={DANGER4} fillPercent={100} size={props.size} />
        <CircleSection color={DANGER3} fillPercent={75} size={props.size} />
        <CircleSection color={DANGER2} fillPercent={50} size={props.size} />
        <CircleSection color={DANGER1} fillPercent={25} size={props.size} />
        <AnimatedCircularProgress
          size={props.size}
          width={15}
          arcSweepAngle={180}
          rotation={-90}
          fill={props.fill}
          tintColor={TRANSPARENT}
          backgroundColor={TRANSPARENT}
          renderCap={({ center }) => (
            <Circle
              cx={center.x}
              cy={center.y}
              r={6}
              fill={WHITE}
              stroke={DARKGRAY}
              strokeWidth={1.5}
            />
          )}
        >
          {() =>
            props.insideText ? (
              <View style={{ height: props.size / 2.5, width: props.size }}>
                <Text style={styles.insideText}>{props.insideText}</Text>
              </View>
            ) : (
              <></>
            )
          }
        </AnimatedCircularProgress>
      </View>
      {props.belowText ? (
        <Text style={styles.textBelow}>{props.belowText}</Text>
      ) : (
        <></>
      )}
    </View>
  );
}

export default AQHalfCircle;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  insideText: {
    fontSize: 17,
    textAlign: 'center',
  },
  textBelow: {
    fontSize: 13,
    textAlign: 'center',
  },
});

import React from 'react';
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
} from '../constants/Colors';
import { width } from '../constants/Layout';
import CircleSection from './CircleSection';

function AQHalfCircle(props: { fill: number }) {
  return (
    <>
      <CircleSection color={DANGER4} fillPercent={100} />
      <CircleSection color={DANGER3} fillPercent={75} />
      <CircleSection color={DANGER2} fillPercent={50} />
      <CircleSection color={DANGER1} fillPercent={25} />
      <AnimatedCircularProgress
        size={width * 0.9}
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
      />
    </>
  );
}

export default AQHalfCircle;

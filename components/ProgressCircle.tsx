import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { getUserPoints } from '../actions/pointsActions';
import { RootAction } from '../actions/types';
import { width } from '../constants/Layout';
import { RootState } from '../reducers';
import { snake } from '../assets/images';

type ProgressCircleProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function ProgressCircle(props: ProgressCircleProps) {
  const { points, fetchPoints } = props;
  const avatar: { avatarIcon: any; avatarName: string } = {
    avatarIcon: snake,
    avatarName: 'Slangen',
  };
  const level: number = Math.floor(points / 500) + 1;

  useEffect(() => {
    // TODO: Change to user's ID after log in is done
    fetchPoints('5f6dde0d71a2bf3507462942');
  }, [fetchPoints]);

  return (
    <View style={styles.card}>
      <AnimatedCircularProgress
        size={width * 0.75}
        width={25}
        arcSweepAngle={250}
        rotation={-125}
        lineCap="round"
        fill={(points / 500) * 100}
        tintColor="#00e0ff"
        backgroundColor="#3d5875"
      >
        {() => (
          <>
            <Image source={avatar.avatarIcon} style={styles.avatarIcon} />
            <Text style={styles.level}>Level {level}</Text>
            <Text style={styles.avatarName}>{avatar.avatarName}</Text>
            <Text style={styles.progress}>
              {points}/{500 * level}
            </Text>
          </>
        )}
      </AnimatedCircularProgress>
    </View>
  );
}

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => {
  return {
    fetchPoints: (userID: string) => {
      getUserPoints(userID, dispatch);
    },
  };
};

const mapStateToProps = (state: RootState) => {
  return {
    points: state.points.points,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProgressCircle);

const styles = StyleSheet.create({
  card: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: width * 0.8,
    height: width * 0.8 - 25,
  },
  avatarIcon: {
    width: width * 0.4,
    height: width * 0.4,
  },
  level: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  avatarName: {
    fontSize: 16,
  },
  progress: {
    fontSize: 10,
  },
});

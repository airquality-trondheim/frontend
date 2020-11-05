import { Auth } from 'aws-amplify';
import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { getProfileData } from '../actions/profileActions';
import { RootAction } from '../actions/types';
import { height, width } from '../constants/Layout';
import { RootState } from '../reducers';

type ProgressCircleProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function ProgressCircle(props: ProgressCircleProps) {
  const { userProfile, fetchUserProfile } = props;
  const userInformation =
    Auth?.Credentials?.Auth?.user?.signInUserSession?.idToken?.payload;

  useEffect(() => {
    fetchUserProfile(userInformation?.sub);
  }, [fetchUserProfile, userInformation]);

  return (
    <View style={styles.card}>
      <AnimatedCircularProgress
        size={width * 0.75}
        width={25}
        arcSweepAngle={250}
        rotation={-125}
        lineCap="round"
        fill={(userProfile.points / 500) * 100}
        tintColor="#00e0ff"
        backgroundColor="#3d5875"
      >
        {() => (
          <>
            <Image
              source={{ uri: userProfile.avatar }}
              style={styles.avatarIcon}
            />
            <Text style={styles.level}>Level {userProfile.level}</Text>
            <Text style={styles.avatarName}>{userProfile.username}</Text>
            <Text style={styles.progress}>
              {userProfile.points}/{500 * userProfile.level}
            </Text>
          </>
        )}
      </AnimatedCircularProgress>
    </View>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    userProfile: state.userprofile,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => {
  return {
    fetchUserProfile: (userID: string) => {
      getProfileData(userID, dispatch);
    },
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
    width: width * 0.35,
    height: width * 0.35,
  },
  level: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  avatarName: {
    fontSize: 16,
    marginTop: height * 0.01,
    marginBottom: height * 0.005,
  },
  progress: {
    fontSize: 10,
  },
});

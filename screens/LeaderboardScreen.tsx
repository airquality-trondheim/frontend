import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  getLeaderboardData,
  getLocalLeaderboardData,
  getLocalUserRanking,
  getUserRanking,
} from '../actions/leaderboardActions';
import { RootState } from '../reducers';
import { Dispatch } from 'redux';
import { RootAction } from '../actions/types';
import { height, width } from '../constants/Layout';
import {
  BACKGROUNDCOLOR2,
  BLACK,
  DARKBLUE,
  DARKERBLUE,
  GRAY,
  LIGHTBLUE,
  WHITE,
} from '../constants/Colors';
import { Auth } from 'aws-amplify';
import { TouchableOpacity } from 'react-native-gesture-handler';

type LeaderboardProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function LeaderboardCardWithModal(props: LeaderboardProps) {
  const {
    leaderboardData,
    localLeaderboardData,
    userRanking,
    localUserRanking,
    fetchLeaderboardData,
    fetchLocalLeaderboardData,
    fetchUserRanking,
    fetchLocalUserRanking,
  } = props;

  const [rankingBinary, setRankingBinary] = useState(false);
  const credential = Auth?.Credentials?.Auth?.user?.sub;
  const ranking = rankingBinary ? localLeaderboardData : leaderboardData;
  let rankAmount = 10;

  const topRankLayout = {
    first: 18,
    second: 18,
    third: 18,
  }

  useEffect(() => {
    // TODO: Change to user's ID after log in is done
    fetchLeaderboardData();
    fetchLocalLeaderboardData('Sverresborg');
    fetchUserRanking(credential);
    fetchLocalUserRanking(credential, 'Sverresborg');

    updateRankingBinary(false);
  }, [
    fetchUserRanking,
    fetchLeaderboardData,
    fetchLocalLeaderboardData,
    fetchLocalUserRanking,
    credential,
  ]);

  const updateRankingBinary = (source: boolean) => {
    setRankingBinary(source);
  };

  const updateRankHeight = (childHeight: number) => {
    rankAmount = Math.floor(height * 0.3 / childHeight);
  }


  return (
    <>
      <View style={styles.outerStyle}>
        <TouchableOpacity
          onPress={() => updateRankingBinary(false)}
          style={styles.centeredContent}
        >
          <>
            <Text style={styles.text}>Hele byen</Text>
            <View
              style={[
                styles.seperatorStyle,
                {
                  width: width * 0.25,
                  backgroundColor:
                    rankingBinary === false ? BACKGROUNDCOLOR2 : GRAY,
                },
              ]}
            />
          </>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => updateRankingBinary(true)}
          style={styles.centeredContent}
        >
          <>
            <Text style={styles.text}>Nabolaget</Text>
            <View
              style={[
                styles.seperatorStyle,
                {
                  width: width * 0.25,
                  backgroundColor:
                    rankingBinary === true ? BACKGROUNDCOLOR2 : GRAY,
                },
              ]}
            />
          </>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 6 }}>
        <View style={styles.rankUpperPortionStyle}>
          <View style={styles.rankWrapperStyle}>
            <Text
              style={[styles.text,]}>{ranking[1]?.username}</Text>
            <View style={styles.secondStyle}>
              <Text style={styles.rankText}>2</Text>
            </View>
          </View>
          <View style={styles.rankWrapperStyle}>
            <Text style={styles.text}>{ranking[0]?.username}</Text>
            <View style={styles.firstStyle}>
              <Text style={styles.rankText}>1</Text>
            </View>
          </View>
          <View style={styles.rankWrapperStyle}>
            <Text style={styles.text}>{ranking[2]?.username}</Text>
            <View style={styles.thirdStyle}>
              <Text style={styles.rankText}>3</Text>
            </View>
          </View>
        </View>
        <View style={styles.rankInnerPortionStyle}>
          <View style={styles.rankElementStyle}>
            {ranking.slice(3, rankAmount + 2)?.map((element, index) => {
              return (
                <View key={index} style={{ flexDirection: 'row', }} onLayout={event => updateRankHeight(event.nativeEvent.layout.height)}>
                  <Text style={[styles.text, { width: width * 0.1 }]}>
                    {index + 4}.
                  </Text>
                  <Text style={styles.text}>{element.username}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
      <View style={styles.userRankWrapper}>
        <View style={styles.userRankContainerStyle}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={styles.text}>Din plassering</Text>
          </View>
          <View style={styles.seperatorStyle} />
          <View style={[styles.centeredContent, { flex: 2 }]}>
            <Text style={styles.text}>
              {(rankingBinary ? localUserRanking : userRanking).ranking}.{' '}
              {userRanking.user.username}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => {
  return {
    fetchLeaderboardData: () => {
      getLeaderboardData(dispatch);
    },
    fetchUserRanking: (userID: string) => {
      getUserRanking(userID, dispatch);
    },
    fetchLocalLeaderboardData: (area: string) => {
      getLocalLeaderboardData(area, dispatch);
    },
    fetchLocalUserRanking: (userID: string, area: string) => {
      getLocalUserRanking(userID, area, dispatch);
    },
  };
};

const mapStateToProps = (state: RootState) => {
  return {
    leaderboardData: state.leaderboard.data,
    userRanking: state.leaderboard.userRanking,
    localLeaderboardData: state.leaderboard.localData,
    localUserRanking: state.leaderboard.localUserRanking,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LeaderboardCardWithModal);

const styles = StyleSheet.create({
  outerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  centeredContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: height * 0.004,
  },

  seperatorStyle: {
    backgroundColor: BACKGROUNDCOLOR2,
    borderRadius: 20,
    width: width * 0.75,
    height: width * 0.01,
    marginHorizontal: 40,
  },

  firstStyle: {
    width: width * 0.25,
    height: height * 0.12,
    backgroundColor: LIGHTBLUE,
    justifyContent: 'center',
    alignItems: 'center',
  },

  secondStyle: {
    width: width * 0.25,
    height: height * 0.08,
    backgroundColor: DARKBLUE,
    justifyContent: 'center',
    alignItems: 'center',
  },

  thirdStyle: {
    width: width * 0.25,
    height: height * 0.06,
    backgroundColor: DARKERBLUE,
    justifyContent: 'center',
    alignItems: 'center',
  },

  rankWrapperStyle: {
    width: width * 0.25,
    height: height * 0.2,
    justifyContent: 'flex-end',
  },

  rankText: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: WHITE,
    shadowColor: BLACK,
    shadowOffset: { width: 3, height: 3 },
    elevation: 1,
    shadowOpacity: 0.6,
  },

  rankUpperPortionStyle: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  rankInnerPortionStyle: {
    flex: 5,
    alignItems: 'center',
  },

  rankElementStyle: {
    width: width * 0.4,
    height: height * 0.3,
    overflow: 'hidden',
    marginTop: height * 0.03,
  },

  userRankWrapper: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  userRankContainerStyle: {
    width: width * 0.8,
    height: height * 0.12,
    backgroundColor: WHITE,
    borderRadius: width * 0.04,
    alignItems: 'center',
  },
});

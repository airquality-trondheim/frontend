import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  getLeaderboardData,
  getUserRanking,
} from '../actions/leaderboardActions';
import { RootState } from '../reducers';
import { Dispatch } from 'redux';
import { RootAction } from '../actions/types';
import LeaderboardItem from '../components/leaderboard/LeaderboardItem';

type LeaderboardProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function LeaderboardCardWithModal(props: LeaderboardProps) {
  const {
    leaderboardData,
    userRanking,
    fetchLeaderboardData,
    fetchUserRanking,
  } = props;

  useEffect(() => {
    // TODO: Change to user's ID after log in is done
    fetchUserRanking('5f6dde0d71a2bf3507462942');
    fetchLeaderboardData();
  }, [fetchUserRanking, fetchLeaderboardData]);

  return (
    <View style={styles.centeredView}>
      <Text style={styles.headerText}>Topp 10 i Norge</Text>
      <Text style={{ ...styles.text, flex: 1 }}>
        Din plassering: {userRanking.ranking}
      </Text>
      <FlatList
        data={leaderboardData}
        renderItem={(user) => LeaderboardItem(user)}
        keyExtractor={(user) => user.id}
      />
    </View>
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
  };
};

const mapStateToProps = (state: RootState) => {
  return {
    leaderboardData: state.leaderboard.data,
    userRanking: state.leaderboard.userRanking,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LeaderboardCardWithModal);

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 13,
  },
  text: {
    fontSize: 17,
    textAlign: 'center',
  },
});

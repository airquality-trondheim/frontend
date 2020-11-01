import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  getLeaderboardData,
  getLocalLeaderboardData,
  getUserRanking,
} from '../actions/leaderboardActions';
import { RootState } from '../reducers';
import { Dispatch } from 'redux';
import { RootAction } from '../actions/types';
import LeaderboardItem from '../components/leaderboard/LeaderboardItem';
import { height, width } from '../constants/Layout';
import { BACKGROUNDCOLOR2, BLACK } from '../constants/Colors';

type LeaderboardProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function LeaderboardCardWithModal(props: LeaderboardProps) {
  const {
    leaderboardData,
    localLeaderboardData,
    userRanking,
    fetchLeaderboardData,
    fetchLocalLeaderboardData,
    fetchUserRanking,
  } = props;

  const [leaderBoardBinary, setLeaderBoardBinary] = useState(false);

  useEffect(() => {
    // TODO: Change to user's ID after log in is done
    fetchUserRanking('5f6dde0d71a2bf3507462942');
    fetchLeaderboardData();
    fetchLocalLeaderboardData('Sverresborg');
  }, [fetchUserRanking, fetchLeaderboardData, fetchLocalLeaderboardData]);

  return (
    // <View style={styles.centeredView}>
    //   <Text style={styles.headerText}>Topp 10 i Norge</Text>
    //   <Text style={{ ...styles.text, flex: 1 }}>
    //     Din plassering: {userRanking.ranking}
    //   </Text>
    //   <FlatList
    //     data={leaderboardData}
    //     renderItem={(user) => LeaderboardItem(user)}
    //     keyExtractor={(user) => user.id}
    //   />
    // </View>

    <>
      <View style={{flex: 1, backgroundColor: 'red'}}></View>
      <View style={{flex: 6, backgroundColor: 'pink'}}>
        <Text>{localLeaderboardData[2].username}</Text>
      </View>
      <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{
          width: width*0.8, height: height* 0.12,backgroundColor: '#fff', borderRadius: width*0.04, alignItems:'center'
          }}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={styles.text}>Din plassering</Text>
          </View>
          <View style={styles.seperatorStyle}/>
          <View style={{flex: 2}}>
            <Text style={styles.text}>{userRanking.ranking}.  {userRanking.user.username}</Text>
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
    }
  };
};

const mapStateToProps = (state: RootState) => {
  return {
    leaderboardData: state.leaderboard.data,
    userRanking: state.leaderboard.userRanking,
    localLeaderboardData: state.leaderboard.localData,
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
    fontWeight: 'bold',
  },
  
  seperatorStyle: {
    backgroundColor: BACKGROUNDCOLOR2,
    borderRadius: 20,
    width: width * 0.75,
    height: width * 0.01,
    marginHorizontal: 40,
  },
});

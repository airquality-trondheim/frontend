import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CarouselItem } from '../CarouselItem';
import { connect } from 'react-redux';
import {
  getLeaderboardData,
  getUserRanking,
} from '../../actions/leaderboardActions';
import { RootState } from '../../reducers';
import { Dispatch } from 'redux';
import { RootAction } from '../../actions/types';
import { useNavigation } from '@react-navigation/native';
import { height, width } from '../../constants/Layout';
import { SEPERATOR } from '../../constants/Colors';
import { Auth } from 'aws-amplify';

type LeaderboardProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function LeaderboardCard(props: LeaderboardProps) {
  const {
    leaderboardData,
    userRanking,
    fetchLeaderboardData,
    fetchUserRanking,
  } = props;
  const navigation = useNavigation();
  const userInformation =
    Auth?.Credentials?.Auth?.user?.signInUserSession?.idToken?.payload;

  useEffect(() => {
    fetchUserRanking(userInformation?.sub);
  }, [fetchUserRanking, userInformation]);

  useEffect(() => {
    fetchLeaderboardData();
  }, [fetchLeaderboardData]);

  return (
    <TouchableOpacity onPress={() => navigation.navigate('LeaderboardScreen')}>
      <CarouselItem headerText="Toppliste">
        <View style={styles.seperatorStyle} />
        <Text style={[styles.text, { marginVertical: height * 0.012 }]}>
          Topp 5
        </Text>
        <View style={[styles.compartementStyle, { flex: 3 }]}>
          {leaderboardData
            .slice(0, leaderboardData.length < 5 ? leaderboardData.length : 5)
            .map((element, index) => {
              return (
                <View key={index} style={{ flexDirection: 'row' }}>
                  <Text style={[styles.text, { width: width * 0.05 }]}>
                    {index + 1}.
                  </Text>
                  <Text style={styles.text}>{element.username}</Text>
                </View>
              );
            })}
        </View>
        <View style={styles.seperatorStyle} />
        <Text style={[styles.text, { marginVertical: height * 0.015 }]}>
          Din plassering
        </Text>
        <View style={[styles.compartementStyle, { flex: 1 }]}>
          <Text style={styles.text}>
            {userRanking.rank}. {userRanking.user.username}
          </Text>
        </View>
      </CarouselItem>
    </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(LeaderboardCard);

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: height * 0.01,
  },

  compartementStyle: {
    width: width * 0.3,
  },

  seperatorStyle: {
    backgroundColor: SEPERATOR,
    borderRadius: 20,
    width: width * 0.38,
    height: width * 0.01,
    marginHorizontal: 40,
  },
});

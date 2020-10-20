import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CarouselItem } from '../CarouselItem';
import { connect } from 'react-redux';
import { getUserRanking } from '../../actions/leaderboardActions';
import { RootState } from '../../reducers';
import { Dispatch } from 'redux';
import { RootAction } from '../../actions/types';
import { useNavigation } from '@react-navigation/native';

type LeaderboardProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function LeaderboardCard(props: LeaderboardProps) {
  const { userRanking, fetchUserRanking } = props;
  const navigation = useNavigation();

  useEffect(() => {
    // TODO: Change to user's ID after log in is done
    fetchUserRanking('5f6dde0d71a2bf3507462942');
  }, [fetchUserRanking]);

  return (
    <TouchableOpacity onPress={() => navigation.navigate('LeaderboardScreen')}>
      <CarouselItem headerText="Toppliste">
        <View style={{ flex: 1 }}>
          <Text style={styles.text}>Du er på</Text>
          <Text style={styles.placement}>{userRanking.ranking}.</Text>
          <Text style={styles.text}>plass</Text>
        </View>
      </CarouselItem>
    </TouchableOpacity>
  );
}

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => {
  return {
    fetchUserRanking: (userID: string) => {
      getUserRanking(userID, dispatch);
    },
  };
};

const mapStateToProps = (state: RootState) => {
  return {
    userRanking: state.leaderboard.userRanking,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeaderboardCard);

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    textAlign: 'center',
  },
  placement: {
    fontSize: 50,
    textAlign: 'center',
  },
});

import { View, Text, Modal, StyleSheet, FlatList } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Grid, Row, Button } from 'native-base';
import { CLOSEBUTTON, WHITE, CAROUSELITEM } from '../constants/Colors';
import { width, singleSideMargin, height } from '../constants/Layout';
import { CarouselItem } from './CarouselItem';
import { connect } from 'react-redux';
import {
  getLeaderboardData,
  getUserRanking,
} from '../actions/leaderboardActions';
import { RootState } from '../reducers';
import { Dispatch } from 'redux';
import { RootAction } from '../actions/types';
import LeaderboardItem from './LeaderboardItem';

type LeaderboardProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function LeaderboardCardWithModal(props: LeaderboardProps) {
  const {
    leaderboardData,
    userRanking,
    fetchLeaderboardData,
    fetchUserRanking,
  } = props;
  const [modalVisible, setModalVisible] = useState(false);
  const unmounted = useRef(false);

  useEffect(() => {
    return () => {
      unmounted.current = true;
    };
  }, []);

  useEffect(() => {
    // TODO: Change to user's ID after log in is done
    fetchUserRanking('5f6dde0d71a2bf3507462942');
  }, [fetchUserRanking]);

  const fetchDataAndUpdateModalVisible = () => {
    fetchLeaderboardData();
    updateModalVisible();
  };

  const updateModalVisible = () => {
    if (!unmounted.current) {
      setModalVisible(!modalVisible);
    }
  };

  return (
    <TouchableOpacity onPress={fetchDataAndUpdateModalVisible}>
      <CarouselItem headerText="Toppliste">
        <View style={{ flex: 1 }}>
          <Text style={styles.text}>Du er på</Text>
          <Text style={styles.placement}>{userRanking.ranking}.</Text>
          <Text style={styles.text}>plass</Text>
        </View>
      </CarouselItem>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={updateModalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Grid>
              <Row size={1}>
                <View style={styles.centeredView}>
                  <Text style={styles.headerText}>Toppliste</Text>
                </View>
              </Row>
              <Row size={1}>
                <Text style={{ ...styles.text, flex: 1 }}>
                  Din plassering: {userRanking.ranking}
                </Text>
              </Row>
              <Row size={7}>
                <FlatList
                  data={leaderboardData}
                  renderItem={(user) => LeaderboardItem(user)}
                  keyExtractor={(user) => user.id}
                />
              </Row>
              <Row size={1.25}>
                <View style={styles.centeredView}>
                  <Button style={styles.button} onPress={updateModalVisible}>
                    <Text style={styles.buttonText}>Lukk</Text>
                  </Button>
                </View>
              </Row>
            </Grid>
          </View>
        </View>
      </Modal>
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
  modalView: {
    width: width - 2 * singleSideMargin,
    height: height * 0.8,
    backgroundColor: CAROUSELITEM,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 20,
    padding: 5,
  },
  button: {
    justifyContent: 'center',
    backgroundColor: CLOSEBUTTON,
    borderRadius: 20,
    padding: 10,
    width: 80,
    elevation: 2,
    alignSelf: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 17,
    textAlign: 'center',
  },
  buttonText: {
    color: WHITE,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  placement: {
    fontSize: 50,
    textAlign: 'center',
  },
});

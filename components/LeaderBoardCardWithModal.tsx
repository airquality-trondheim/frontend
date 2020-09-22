import { View, Text, Modal, StyleSheet } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Leaderboard from 'react-native-leaderboard';
import { Grid, Row, Button } from 'native-base';
import { MODALBACKGROUND, CLOSEBUTTON, WHITE } from '../constants/Colors';
import { width, singleSideMargin, height } from '../constants/Layout';
import { CarouselItem } from './CarouselItem';
import { connect } from 'react-redux';
import { getLeaderboardData } from '../actions/leaderboardActions';
import { RootState } from '../reducers';
import { Dispatch } from 'redux';
import { RootAction } from '../actions/types';

type LeaderboardProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function LeaderboardCardWithModal(props: LeaderboardProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const unmounted = useRef(false);

  useEffect(() => {
    return () => {
      unmounted.current = true;
    };
  }, []);

  const fetchDataAndUpdateModalVisible = () => {
    props.getLeaderboardData();
    updateModalVisible();
  };

  const updateModalVisible = () => {
    if (!unmounted.current) {
      setModalVisible(!modalVisible);
    }
  };

  return (
    <TouchableOpacity onPress={fetchDataAndUpdateModalVisible}>
      <CarouselItem leftMostItem headerText="Toppliste">
        <Text>Din plassering er...</Text>
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
              <Row size={2}>
                <View style={styles.centeredView}>
                  <Text>Din plassering</Text>
                </View>
              </Row>
              <Row size={5}>
                <Leaderboard
                  data={props.leaderboardData}
                  sortBy="points"
                  labelBy="username"
                />
              </Row>
              <Row size={1}>
                <View style={styles.centeredView}>
                  <Button style={styles.button} onPress={updateModalVisible}>
                    <Text style={styles.textStyle}>Lukk</Text>
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
    getLeaderboardData: () => {
      getLeaderboardData(dispatch);
    },
  };
};

const mapStateToProps = (state: RootState) => {
  return {
    leaderboardData: state.leaderboard.data,
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
    height: height * 0.75,
    backgroundColor: MODALBACKGROUND,
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
  textStyle: {
    color: WHITE,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

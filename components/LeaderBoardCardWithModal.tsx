import { View, Text, Modal, StyleSheet } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Leaderboard from 'react-native-leaderboard';
import { Grid, Row, Button } from 'native-base';
import { MODALBACKGROUND, CLOSEBUTTON, WHITE } from '../constants/Colors';
import { width, singleSideMargin, height } from '../constants/Layout';
import { CarouselItem } from './CarouselItem';

function LeaderboardCardWithModal() {
  const data = [
    { userName: 'Joe', points: 52 },
    { userName: 'Snake', points: 150 },
    { userName: 'Jenny', points: 120 },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const unmounted = useRef(false);

  useEffect(() => {
    return () => {
      unmounted.current = true;
    };
  }, []);

  const updateModalVisible = () => {
    if (!unmounted.current) {
      setModalVisible(!modalVisible);
    }
  };

  return (
    <TouchableOpacity onPress={updateModalVisible}>
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
                <Leaderboard data={data} sortBy="points" labelBy="userName" />
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

export default LeaderboardCardWithModal;

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

import { useLinkProps } from '@react-navigation/native';
import { Grid, Row, Button } from 'native-base';
import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Modal } from 'react-native';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Dispatch } from 'redux';
import { getAchievementCardData } from '../actions.ts/achievementCardActions';
import { RootAction } from '../actions.ts/types';
import { width, height } from '../constants/Layout';
import { RootState } from '../reducers';
import { CarouselItem } from './CarouselItem';
import { connect } from 'react-redux';
import { AchievementFormatShell } from './AchievementFormatShell';
import {
  BACKGROUNDCOLOR1,
  BACKGROUNDCOLOR2,
  BACKGROUNDCOLOR3,
  BACKGROUNDCOLOR4,
} from '../constants/Colors';

type AchievementCardProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDistpatchToProps>;

const AchievementCard = (props: AchievementCardProps) => {
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

  const fetchDataAndUpdateModalVisbile = () => {
    props.getAchievementCardData();
    updateModalVisible();
  };

  return (
    <TouchableHighlight onPress={fetchDataAndUpdateModalVisbile}>
      <View>
        <CarouselItem headerText="Bragder!">
          <Text>Her er bragdene dine!</Text>
        </CarouselItem>
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
          <View style={styles.centerContent}>
            <View style={styles.innerView}>
              <Grid>
                <Row size={1}>
                  <View style={styles.centerContent}>
                    <Text style={styles.textStyle}>Bragder</Text>
                  </View>
                </Row>
                <View></View>
                <Row size={8}>
                  <AchievementFormatShell {...props} />
                </Row>

                <Row size={1} style={styles.centerContent2}>
                  <View style={styles.centerContent}>
                    <Button
                      onPress={fetchDataAndUpdateModalVisbile}
                      style={styles.buttonStyle}
                    >
                      <Text style={styles.textStyle}>Lukk!</Text>
                    </Button>
                  </View>
                </Row>
              </Grid>
            </View>
          </View>
        </Modal>
      </View>
    </TouchableHighlight>
  );
};

const mapDistpatchToProps = (dispatch: Dispatch<RootAction>) => {
  return {
    getAchievementCardData: () => {
      getAchievementCardData(dispatch);
    },
  };
};

const mapStateToProps = (state: RootState) => {
  return {
    AchievementCardData: state.achievementcard.data,
  };
};

export default connect(mapStateToProps, mapDistpatchToProps)(AchievementCard);
export { AchievementCardProps };

const styles = StyleSheet.create({
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flex: 1,
  },

  centerContent2: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'column',
  },

  innerView: {
    backgroundColor: BACKGROUNDCOLOR2,
    borderRadius: 20,
    width: width,
    height: 0.75 * height,
  },

  textStyle: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  buttonStyle: {
    backgroundColor: BACKGROUNDCOLOR4,
    justifyContent: 'center',
    alignContent: 'center',
    width: 0.2 * width,
    height: 0.05 * height,
  },

  modalView: {},
});

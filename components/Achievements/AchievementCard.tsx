import { Grid, Row, Button } from 'native-base';
import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Modal } from 'react-native';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Dispatch } from 'redux';
import { getAchievementCardData } from '../../actions/achievementCardActions';
import { RootAction } from '../../actions/types';
import { width, height } from '../../constants/Layout';
import { RootState } from '../../reducers';
import { CarouselItem } from '../CarouselItem';
import { connect } from 'react-redux';
import { AchievementFormatShell } from './AchievementFormatShell';
import { BACKGROUNDCOLOR2, WHITE } from '../../constants/Colors';

type AchievementCardProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDistpatchToProps>;

const AchievementCard = (props: AchievementCardProps) => {
  const { AchievementCardData, getAchievementData } = props;
  const [modalVisible, setModalVisible] = useState(false);
  const unmounted = useRef(false);

  useEffect(() => {
    return () => {
      unmounted.current = true;
    };
  }, []);

  useEffect(() => {
    getAchievementData();
  }, [getAchievementData]);

  const updateModalVisible = () => {
    if (!unmounted.current) {
      setModalVisible(!modalVisible);
    }
  };

  const fetchDataAndUpdateModalVisbile = () => {
    updateModalVisible();
  };

  const lastElement = AchievementCardData[0];
  const secondElement = AchievementCardData[1];

  return (
    <TouchableHighlight onPress={fetchDataAndUpdateModalVisbile}>
      <View>
        <CarouselItem headerText="Bragder">
          <View>
            <View style={{ justifyContent: 'center', flex: 1 }}>
              <View style={styles.seperatorStyle} />
              <View style={[styles.centerContent, { flex: 2 }]}>
                <Text style={[styles.textStyle, { fontSize: 15 }]}>
                  Sist oppnådd
                </Text>
                {/*checks if redux functioality has defined element yet,
                and if so displays the Symbol of the most recent achievement*/}
                <Text style={{ fontSize: 50 }}>
                  {lastElement === undefined
                    ? ''
                    : String.fromCodePoint(lastElement.achievementSymbol)}
                </Text>
                {/*does the same for the achievement name*/}
                <Text style={[styles.textStyle, { fontSize: 15 }]}>
                  {lastElement === undefined ? '' : lastElement.achievementName}
                </Text>
              </View>
            </View>
            <View style={{ justifyContent: 'center', flex: 1 }}>
              <View style={styles.seperatorStyle} />
              <View style={[styles.centerContent, { flex: 2 }]}>
                <Text style={[styles.textStyle, { fontSize: 15 }]}>
                  {' '}
                  Nest sist oppnådd
                </Text>
                {/*checks if redux functioality has defined element yet,
                and if so displays the Symbol of the second most recent achievement*/}
                <Text style={{ fontSize: 50 }}>
                  {secondElement === undefined
                    ? ''
                    : String.fromCodePoint(secondElement.achievementSymbol)}
                </Text>
                {/*does the same for the achievement name*/}
                <Text style={[styles.textStyle, { fontSize: 15 }]}>
                  {secondElement === undefined
                    ? ''
                    : secondElement.achievementName}
                </Text>
              </View>
            </View>
          </View>
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
    getAchievementData: () => {
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
    height: 0.8 * height,
  },

  textStyle: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  buttonStyle: {
    backgroundColor: WHITE,
    justifyContent: 'center',
    alignContent: 'center',
    width: 0.2 * width,
    height: 0.05 * height,
  },

  seperatorStyle: {
    backgroundColor: BACKGROUNDCOLOR2,
    borderRadius: 20,
    width: width * 0.4,
    height: width * 0.01,
    marginHorizontal: 40,
  },
});

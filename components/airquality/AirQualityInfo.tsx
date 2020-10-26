import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Text, StyleProp, ViewStyle } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RootAction } from '../../actions/types';
import { GRAY } from '../../constants/Colors';
import { width } from '../../constants/Layout';
import { RootState } from '../../reducers';
import { Col, Grid, Row } from 'native-base';
import AQHalfCircle from './AQHalfCircle';
import InfoButton from '../InfoButton';
import AQInfoModal from './AQInfoModal';
import { getAirQualityDataForStation } from '../../actions/airqualityActions';

enum airQuality {
  'Utmerket' = 1,
  'Bra',
  'Dårlig',
  'Uhyggelig',
}

type ProgressCircleProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function ProgressCircle(props: ProgressCircleProps) {
  const { airqualityData, fetchAirQuality } = props;
  const [modalVisible, setModalVisible] = useState(false);
  const unmounted = useRef(false);

  useEffect(() => {
    return () => {
      unmounted.current = true;
    };
  }, []);

  useEffect(() => {
    fetchAirQuality('Tiller');
  }, [fetchAirQuality]);

  const updateModalVisible = () => {
    if (!unmounted.current) {
      setModalVisible(!modalVisible);
    }
  };

  const createAirqualityComponent = (
    aqValue: number,
    aqLetters: string,
    aqNumbers: string,
    colStyle: StyleProp<ViewStyle>,
  ) => {
    return (
      <Col style={colStyle}>
        <View style={styles.row}>
          <Text style={styles.airqualityValue}>{aqValue}</Text>
          <Text style={styles.airqualityComponentLetters}>{aqLetters}</Text>
          <Text style={styles.airqualityComponentNumbers}>{aqNumbers}</Text>
        </View>
      </Col>
    );
  };

  return (
    <View style={styles.center}>
      <View style={styles.airQualityInfo}>
        <InfoButton onPress={updateModalVisible} />
        <AQInfoModal
          onCloseButtonPress={updateModalVisible}
          modalVisible={modalVisible}
          modalOnRequestClose={updateModalVisible}
        />
        {airqualityData.time.length > 0 ? (
          <>
            <AQHalfCircle
              fill={(airqualityData.time[0].variables.AQI.value - 1) * 25}
              size={width * 0.9}
            />
            <View style={styles.info}>
              <Grid>
                <Row size={3} style={styles.mainRow}>
                  <Text style={styles.overallAirquality}>
                    {
                      airQuality[
                        Math.floor(airqualityData.time[0].variables.AQI.value)
                      ]
                    }
                  </Text>
                </Row>
                <Row size={1}>
                  {createAirqualityComponent(
                    Math.round(
                      airqualityData.time[0].variables.pm25_concentration
                        .value + Number.EPSILON,
                    ),
                    'PM',
                    '2.5',
                    styles.rightBorder,
                  )}
                  {createAirqualityComponent(
                    Math.round(
                      airqualityData.time[0].variables.pm10_concentration
                        .value + Number.EPSILON,
                    ),
                    'PM',
                    '10',
                    styles.rightBorder,
                  )}
                  {createAirqualityComponent(
                    Math.round(
                      airqualityData.time[0].variables.no2_concentration.value +
                        Number.EPSILON,
                    ),
                    'NO',
                    '2',
                    {},
                  )}
                </Row>
              </Grid>
            </View>
          </>
        ) : (
          <>
            <AQHalfCircle fill={0} size={width * 0.9} />
            <View style={styles.info}>
              <Text style={styles.AQUnavailable}>
                Luftkvalitet ikke tilgjengelig
              </Text>
            </View>
          </>
        )}
      </View>
    </View>
  );
}

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => {
  return {
    fetchAirQuality: (station: string) => {
      getAirQualityDataForStation(dispatch, station);
    },
  };
};

const mapStateToProps = (state: RootState) => {
  return {
    airqualityData: state.airquality,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProgressCircle);

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  airQualityInfo: {
    height: (width * 0.75) / 2 + 20,
  },
  overallAirquality: {
    fontSize: 40,
  },
  airqualityValue: {
    fontSize: 32,
  },
  airqualityComponentLetters: {
    fontSize: 14,
  },
  airqualityComponentNumbers: {
    fontSize: 10,
  },
  info: {
    height: (width * 0.9) / 2,
    width: width * 0.9,
    position: 'absolute',
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainRow: {
    width: width * 0.7,
    borderColor: GRAY,
    borderBottomWidth: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  rightBorder: {
    borderColor: GRAY,
    borderRightWidth: 2,
  },
  AQUnavailable: {
    flex: 1,
    fontSize: 21,
    textAlign: 'center',
    textAlignVertical: 'bottom',
    paddingBottom: 10,
    maxWidth: width * 0.75,
  },
});

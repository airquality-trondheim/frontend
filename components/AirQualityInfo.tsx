import React, { useEffect } from 'react';
import { View, StyleSheet, Text, StyleProp, ViewStyle } from 'react-native';
import useColorScheme from '../hooks/useColorScheme';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RootAction } from '../actions/types';
import Colors, { GRAY } from '../constants/Colors';
import { width } from '../constants/Layout';
import { RootState } from '../reducers';
import { getAirQualityData } from '../actions/mapActions';
import { Col, Grid, Row } from 'native-base';
import AQHalfCircle from './AQHalfCircle';

type ProgressCircleProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function ProgressCircle(props: ProgressCircleProps) {
  const colorSheme = useColorScheme();
  const { airQuality, fetchAirQuality } = props;

  useEffect(() => {
    fetchAirQuality();
  }, [fetchAirQuality]);

  const createAirqualityComponent = (
    aqValue: number,
    aqLetters: string,
    aqNumbers: string,
    colStyle: StyleProp<ViewStyle>,
  ) => {
    return (
      <Col style={colStyle}>
        <View style={styles.row}>
          <Text
            style={[styles.airqualityValue, { color: Colors[colorSheme].text }]}
          >
            {aqValue}
          </Text>
          <Text
            style={[
              styles.airqualityComponentLetters,
              { color: Colors[colorSheme].text },
            ]}
          >
            {aqLetters}
          </Text>
          <Text
            style={[
              styles.airqualityComponentNumbers,
              { color: Colors[colorSheme].text },
            ]}
          >
            {aqNumbers}
          </Text>
        </View>
      </Col>
    );
  };

  return (
    <View style={styles.center}>
      <View style={styles.airQualityInfo}>
        {airQuality.length > 0 ? (
          <>
            <AQHalfCircle fill={10} />
            <View style={styles.info}>
              <Grid>
                <Row size={3} style={styles.mainRow}>
                  <Text
                    style={[
                      styles.overallAirquality,
                      { color: Colors[colorSheme].text },
                    ]}
                  >
                    Utmerket
                  </Text>
                </Row>
                <Row size={1}>
                  {createAirqualityComponent(
                    12,
                    'PM',
                    '2.5',
                    styles.rightBorder,
                  )}
                  {createAirqualityComponent(
                    Math.round(airQuality[0].value + Number.EPSILON),
                    'PM',
                    '10',
                    styles.rightBorder,
                  )}
                  {createAirqualityComponent(14, 'NO', '2', {})}
                </Row>
              </Grid>
            </View>
          </>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
}

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => {
  return {
    fetchAirQuality: () => {
      getAirQualityData(dispatch);
    },
  };
};

const mapStateToProps = (state: RootState) => {
  return {
    airQuality: state.map.aqData,
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
    height: (width * 0.9) / 2 + 10,
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
});

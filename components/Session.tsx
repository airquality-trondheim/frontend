import React, { useState, useRef, useEffect } from 'react';
import { Modal, View, Text, StyleSheet } from 'react-native';
import { Button, Grid, Row, Col } from 'native-base';
import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';
import * as Permissions from 'expo-permissions';
import { postSessionData } from '../queries/session';
import { Auth } from 'aws-amplify';
import { waypoint, SessionResult } from '../types/_types';
import { width, singleSideMargin, height } from '../constants/Layout';
import {
  CLOSEBUTTON,
  WHITE,
  STARTBUTTON,
  STOPBUTTON,
} from '../constants/Colors';

const LOCATION_TRACKING = 'location-tracking';
let waypoints: waypoint[] = [];

function Session() {
  const [sessionActive, setSessionActive] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [result, setResult] = useState<SessionResult | undefined>(undefined);
  const unmounted = useRef(false);

  useEffect(() => {
    return () => {
      unmounted.current = true;
    };
  }, []);

  const startLocationTracking = async () => {
    let res = await Permissions.askAsync(Permissions.LOCATION);
    if (!res.permissions.location.foregroundGranted) {
      return;
    }
    waypoints = [];
    await Location.startLocationUpdatesAsync(LOCATION_TRACKING, {
      accuracy: Location.Accuracy.Highest,
      timeInterval: 5000,
      distanceInterval: 0,
    });
    const hasStarted = await Location.hasStartedLocationUpdatesAsync(
      LOCATION_TRACKING,
    );
    setSessionActive(hasStarted);
  };

  const stopLocationTracking = async () => {
    setSessionActive(false);
    await Location.stopLocationUpdatesAsync(LOCATION_TRACKING);
    const summary: SessionResult = await postSessionData({
      userId: Auth.Credentials.Auth.user.attributes.sub,
      sessionType: 'work',
      startTime: waypoints[0].timestamp,
      stopTime: waypoints[waypoints.length - 1].timestamp,
      waypoints: waypoints,
    });
    setResult(summary);
    updateModalVisible();
  };

  const updateModalVisible = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.transparentView}>
      {sessionActive ? (
        <View style={styles.buttonView}>
          <Button style={styles.stopButton} onPress={stopLocationTracking}>
            <Text style={styles.buttonText}>Avslutt</Text>
          </Button>
        </View>
      ) : (
        <View>
          {!modalVisible ? (
            <View style={styles.buttonView}>
              <Button
                style={styles.startButton}
                onPress={startLocationTracking}
              >
                <Text style={styles.buttonText}>Start</Text>
              </Button>
            </View>
          ) : null}
        </View>
      )}
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
                  <Text style={styles.summaryText}>Oppsummering</Text>
                </View>
              </Row>
              <Row size={1}>
                <Col size={1}>
                  <View style={styles.centeredView}>
                    <Text>Tid</Text>
                    <Text style={styles.summaryText}>
                      {result?.millisecondsElapsed}
                    </Text>
                  </View>
                </Col>
                <Col size={1}>
                  <View style={styles.centeredView}>
                    <Text>Avstand</Text>
                    <Text style={styles.summaryText}>
                      {result?.metersTraveled} m
                    </Text>
                  </View>
                </Col>
              </Row>
              <Row size={2}>
                <View style={styles.centeredView}>
                  <Text>Du har oppnådd:</Text>
                  <Text style={styles.totalPointsText}>
                    {result?.sumPoints} poeng
                  </Text>
                </View>
              </Row>
              <Row size={2}>
                <Col size={1}>
                  <View style={styles.centeredView}>
                    <Text style={styles.summaryText}>
                      {result?.distancePoints}p
                    </Text>
                  </View>
                </Col>
                <Col size={1}>
                  <View style={styles.centeredView}>
                    <Text style={styles.summaryText}>
                      {result?.safeZonePoints}p
                    </Text>
                  </View>
                </Col>
                {/* <Col size={1}>
                  <View style={styles.centeredView}>
                    <Text style={styles.summaryText}>{result?.achievementPoints}p</Text>
                  </View>
                </Col> */}
              </Row>
              <Row size={1}>
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
    </View>
  );
}

export default Session;

TaskManager.defineTask(LOCATION_TRACKING, async ({ data, error }) => {
  if (error) {
    console.log('LOCATION_TRACKING task ERROR:', error);
    return;
  }
  if (data) {
    const { locations } = data;
    let lat: number = locations[0].coords.latitude;
    let long: number = locations[0].coords.longitude;

    waypoints.push({
      longitude: long,
      latitude: lat,
      timestamp: new Date(Date.now()),
      pollutionLevel: '',
    });
    console.log(`${new Date(Date.now()).toLocaleString()}: ${lat},${long}`);
  }
});

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: width - 2 * singleSideMargin,
    height: height * 0.75,
    backgroundColor: WHITE,
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
  startButton: {
    backgroundColor: STARTBUTTON,
    width: 80,
    borderRadius: 20,
    justifyContent: 'center',
  },
  stopButton: {
    backgroundColor: STOPBUTTON,
    width: 80,
    borderRadius: 20,
    justifyContent: 'center',
  },
  transparentView: {
    backgroundColor: 'rgba(0,0,0,0.0)',
    position: 'absolute',
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  buttonView: {
    marginRight: singleSideMargin,
    marginBottom: singleSideMargin,
  },
  buttonText: {
    color: WHITE,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  totalPointsText: {
    fontSize: 44,
    textAlign: 'center',
  },
  summaryText: {
    fontSize: 30,
  },
});

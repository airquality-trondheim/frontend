import React, { useState, useRef, useEffect } from 'react';
import { Modal, View, Text, StyleSheet } from 'react-native';
import { Button, Grid, Row, Col } from 'native-base';
import { getDistance } from 'geolib';
import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';
import * as Permissions from 'expo-permissions';
import { postSessionData } from '../queries/session';
import { waypoint, SessionResult } from '../types/_types';
import { width, singleSideMargin, height } from '../constants/Layout';
import { CLOSEBUTTON, WHITE, STOPBUTTON } from '../constants/Colors';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import Closebutton from './CloseButton';
import { Auth } from 'aws-amplify';

const LOCATION_TRACKING = 'location-tracking';
let waypoints: waypoint[] = [];
let pollutionLevel = 'ukjent';

export default function Session() {
  const [sessionActive, setSessionActive] = useState(false);
  const [totalDistance, setTotalDistance] = useState(0);
  const [oldWaypointsLength, setOldWaypointsLength] = useState(0);
  const [sessionMilliseconds, setSessionMilliseconds] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [result, setResult] = useState<SessionResult | undefined>(undefined);
  const unmounted = useRef(false);

  useEffect(() => {
    return () => {
      unmounted.current = true;
    };
  }, []);

  // Used to calculate session details such as average speed and duration.
  useEffect(() => {
    let interval = null;
    if (sessionActive) {
      interval = setInterval(() => {
        if (waypoints.length >= 3 && waypoints.length > oldWaypointsLength) {
          // Has at least 3 waypoints and one more than last time
          setOldWaypointsLength(waypoints.length);
          const firstCoords = {
            latitude: waypoints[waypoints.length - 2].latitude,
            longitude: waypoints[waypoints.length - 2].longitude,
          };
          const secondsCoords = {
            latitude: waypoints[waypoints.length - 1].latitude,
            longitude: waypoints[waypoints.length - 1].longitude,
          };
          const newDistance = getDistance(firstCoords, secondsCoords);

          const time =
            waypoints[waypoints.length - 1].timestamp.getTime() -
            waypoints[waypoints.length - 2].timestamp.getTime();

          const avgSpeed = newDistance / (time / 1000);

          // Checks if the average speed is above 8 m/s = 28.8 km/h
          if (avgSpeed > 8) {
            stopLocationTracking();
          }

          setTotalDistance(totalDistance + newDistance);
        }
        setSessionMilliseconds(sessionMilliseconds + 1000);
      }, 1000);
    } else if (!sessionActive && sessionMilliseconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });

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
      userId:
        Auth.Credentials.Auth.user.signInUserSession.accessToken.payload.sub,
      sessionType: 'Arbeid',
      startTime: waypoints[0].timestamp,
      stopTime: waypoints[waypoints.length - 1].timestamp,
      waypoints: waypoints,
    });
    setResult(summary);
    updateModalVisible();
    setSessionMilliseconds(0);
    setTotalDistance(0);
  };

  const updateModalVisible = () => {
    setModalVisible(!modalVisible);
  };

  function msToTime(duration: number) {
    let seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return hours + ':' + minutes + ':' + seconds;
  }

  const activeSessionComponent = () => {
    return (
      <View style={styles.sessionView}>
        <View style={styles.sessionMetric}>
          <Text>Tid</Text>
          <Text style={styles.summaryText}>
            {msToTime(sessionMilliseconds)}
          </Text>
        </View>
        <View style={styles.sessionMetric}>
          <Text>Avstand</Text>
          <Text style={styles.summaryText}>
            {Math.round((totalDistance / 1000) * 10) / 10} km
          </Text>
        </View>
        <View style={styles.sessionMetric}>
          <Button
            style={[styles.button, styles.stopButton]}
            onPress={stopLocationTracking}
          >
            <Text style={styles.buttonText}>Avslutt</Text>
          </Button>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.transparentView}>
      {sessionActive ? (
        activeSessionComponent()
      ) : !modalVisible ? (
        <View style={styles.buttonView}>
          <Button style={styles.button} onPress={startLocationTracking}>
            <Text style={styles.buttonText}>Start</Text>
          </Button>
        </View>
      ) : null}
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
                      {msToTime(
                        result?.millisecondsElapsed
                          ? result.millisecondsElapsed
                          : 0,
                      )}
                    </Text>
                  </View>
                </Col>
                <Col size={1}>
                  <View style={styles.centeredView}>
                    <Text>Avstand</Text>
                    <Text style={styles.summaryText}>
                      {result?.metersTraveled
                        ? result.metersTraveled / 1000
                        : 0}{' '}
                      km
                    </Text>
                  </View>
                </Col>
              </Row>
              <Row size={2}>
                <View style={styles.centeredView}>
                  <Text>Du har oppnådd:</Text>
                  <Text style={styles.totalPointsText}>
                    {Math.floor(result?.sumPoints ? result.sumPoints : 0)} poeng
                  </Text>
                </View>
              </Row>
              <Row size={2}>
                <Col size={1}>
                  <View style={styles.centeredView}>
                    <FontAwesome5 name="walking" size={50} color="black" />
                    <Text>Distanse</Text>
                    <Text style={styles.summaryText}>
                      {Math.floor(
                        result?.distancePoints ? result.distancePoints : 0,
                      )}{' '}
                      p
                    </Text>
                  </View>
                </Col>
                <Col size={1}>
                  <View style={styles.centeredView}>
                    <FontAwesome name="map-marker" size={50} color="#6EE86E" />
                    <Text>Trygg sone</Text>
                    <Text style={styles.summaryText}>
                      {Math.floor(
                        result?.safeZonePoints ? result.safeZonePoints : 0,
                      )}{' '}
                      p
                    </Text>
                  </View>
                </Col>
              </Row>
              <Row size={1}>
                <View style={styles.centeredView}>
                  <Closebutton onPress={updateModalVisible} />
                </View>
              </Row>
            </Grid>
          </View>
        </View>
      </Modal>
    </View>
  );
}

/**
 * Defines the task for location tracking.
 * Is triggerd every timestep as defined in Location.startGeofencingAsync
 */

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
      pollutionLevel: pollutionLevel,
    });
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
  stopButton: {
    backgroundColor: STOPBUTTON,
  },
  transparentView: {
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
  sessionView: {
    backgroundColor: WHITE,
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: singleSideMargin,
  },
  sessionMetric: {
    alignItems: 'center',
  },
});

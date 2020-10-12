import React, { useState } from 'react';
import { Button } from 'react-native';
import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';
import * as Permissions from 'expo-permissions';
import { postSessionData } from '../queries/session';
import { Auth } from 'aws-amplify';

const LOCATION_TRACKING = 'location-tracking';
let waypoints = [];

function Session() {
  const [sessionActive, setSessionActive] = useState(false);

  const startLocationTracking = async () => {
    let res = await Permissions.askAsync(Permissions.LOCATION);
    console.log(res);
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
    const summary = await postSessionData({
      userId: Auth.Credentials.Auth.user.attributes.sub,
      sessionType: 'work',
      startTime: waypoints[0].timestamp,
      stopTime: waypoints[waypoints.length - 1].timestamp,
      waypoints: waypoints,
    });
    console.log(summary);
  };

  if (sessionActive) {
    return <Button title="Stop tracking" onPress={stopLocationTracking} />;
  } else {
    return <Button title="Start tracking" onPress={startLocationTracking} />;
  }
}

export default Session;

TaskManager.defineTask(LOCATION_TRACKING, async ({ data, error }) => {
  if (error) {
    console.log('LOCATION_TRACKING task ERROR:', error);
    return;
  }
  if (data) {
    const { locations } = data;
    let lat = locations[0].coords.latitude;
    let long = locations[0].coords.longitude;

    waypoints.push({
      longitude: long,
      latitude: lat,
      timestamp: new Date(Date.now()),
      pollutionLevel: '',
    });
    console.log(`${new Date(Date.now()).toLocaleString()}: ${lat},${long}`);
  }
});

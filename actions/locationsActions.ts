import AsyncStorage from '@react-native-community/async-storage';
import { Dispatch } from 'redux';
import { fetchLocations, fetchStations } from '../queries/locations';
import store from '../store';
import {
  GET_CURRENT_LOCATION,
  GET_LOCATIONS,
  GET_STATIONS,
  POST_CURRENT_LOCATION,
  RootAction,
} from './types';
import { Location } from '../types/_types';

export async function getStations(dispatch: Dispatch<RootAction>) {
  const data = [...store.getState().locations.stations];
  if (data.length > 0) {
    // stations has already been fetched
    return;
  }
  const newStations = await fetchStations();
  if (newStations === undefined) {
    return;
  }
  dispatch({
    type: GET_STATIONS,
    stations: newStations,
  });
}

export async function getLocations(dispatch: Dispatch<RootAction>) {
  const data = [...store.getState().locations.locations];
  if (data.length > 0) {
    // locations has already been fetched
    return;
  }
  const newLocations = await fetchLocations();
  if (newLocations === undefined) {
    return;
  }
  dispatch({
    type: GET_LOCATIONS,
    locations: newLocations,
  });
}

export async function getCurrentLocation(dispatch: Dispatch<RootAction>) {
  getData('currentStation').then((obj) => {
    if (obj !== null) {
      dispatch({
        type: GET_CURRENT_LOCATION,
        currentLocation: obj,
      });
    }
  });
}

export async function postCurrentLocation(
  location: Location,
  dispatch: Dispatch<RootAction>,
) {
  storeData(location, 'currentStation');
  dispatch({
    type: POST_CURRENT_LOCATION,
    currentLocation: location,
  });
}

const getData = async (storageKey: string): Promise<Location | null> => {
  //Copyright (c) 2015-present, Facebook, Inc.
  try {
    const jsonValue = await AsyncStorage.getItem(storageKey);
    const obj: Location | null =
      jsonValue != null ? JSON.parse(jsonValue) : null;
    return obj;
  } catch (e) {
    console.log('Error retrieving data for location');
    return null;
  }
};

const storeData = async (value: Location, storageKey: string) => {
  //Copyright (c) 2015-present, Facebook, Inc.
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(storageKey, jsonValue);
  } catch (e) {
    console.log('Error saving data about location');
  }
};

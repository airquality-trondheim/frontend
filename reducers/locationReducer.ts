import {
  GET_CURRENT_LOCATION,
  GET_LOCATIONS,
  GET_STATIONS,
  LocationsActionTypes,
  PUT_CURRENT_LOCATION,
} from '../actions/types';
import { LocationState } from '../types/_types';

const initialState: LocationState = {
  stations: [],
  locations: [],
  currentLocation: null,
};

export default function (
  state = initialState,
  action: LocationsActionTypes,
): LocationState {
  switch (action.type) {
    case GET_STATIONS:
      return {
        ...state,
        stations: action.stations,
      };
    case GET_LOCATIONS:
      return {
        ...state,
        locations: action.locations,
      };
    case GET_CURRENT_LOCATION:
      return {
        ...state,
        currentLocation: action.currentLocation,
      };
    case PUT_CURRENT_LOCATION:
      return {
        ...state,
        currentLocation: action.currentLocation,
      };
    default:
      return state;
  }
}

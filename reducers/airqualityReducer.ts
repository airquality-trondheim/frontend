import {
  AirqualityActionTypes,
  GET_AIRQUALITYFORSTATION,
} from '../actions/types';
import { AirqualityData } from '../types/_types';

const initialState: AirqualityData = {
  location: '',
  time: [],
  lastFetched: new Date(0),
};

export default function (
  state = initialState,
  action: AirqualityActionTypes,
): AirqualityData {
  switch (action.type) {
    case GET_AIRQUALITYFORSTATION:
      return {
        ...state,
        location: action.data.location,
        time: action.data.time,
      };
    default:
      return state;
  }
}

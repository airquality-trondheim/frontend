import {
  AirqualityActionTypes,
  GET_AIRQUALITY_FOR_LOCATION,
} from '../actions/types';
import { AirqualityData } from '../types/_types';

const initialState: AirqualityData = {
  areacode: '',
  airqualityData: [],
};

export default function (
  state = initialState,
  action: AirqualityActionTypes,
): AirqualityData {
  switch (action.type) {
    case GET_AIRQUALITY_FOR_LOCATION:
      return {
        ...state,
        areacode: action.areacode,
        airqualityData: action.airqualityData,
      };
    default:
      return state;
  }
}

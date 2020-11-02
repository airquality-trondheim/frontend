import {
  AirqualityActionTypes,
  GET_AIRQUALITY_FOR_LOCATION,
} from '../actions/types';
import { AirqualityData } from '../types/_types';

const initialState: AirqualityData = {
  areacode: '',
  AQI: { todayData: [], tomorrowData: [] },
  NO2_AQI: { todayData: [], tomorrowData: [] },
  PM10_AQI: { todayData: [], tomorrowData: [] },
  PM25_AQI: { todayData: [], tomorrowData: [] },
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
        AQI: action.AQI,
        NO2_AQI: action.NO2_AQI,
        PM10_AQI: action.PM10_AQI,
        PM25_AQI: action.PM25_AQI,
      };
    default:
      return state;
  }
}

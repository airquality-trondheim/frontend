import { GET_WEATHER, WeatherActionTypes } from '../actions/types';
import { WeatherData } from '../types/_types';

const initialState: WeatherData = {
  today: [],
  tomorrow: [],
  lastFetched: new Date(0),
};

export default function (
  state = initialState,
  action: WeatherActionTypes,
): WeatherData {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        today: action.today,
        tomorrow: action.tomorrow,
        lastFetched: action.lastFetched,
      };
    default:
      return state;
  }
}

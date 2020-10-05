import { GET_WEATHER, WeatherActionTypes } from '../actions/types';
import { WeatherData } from '../types/_types';

const initialState: WeatherData = {
  data: [],
};

export default function (
  state = initialState,
  action: WeatherActionTypes,
): WeatherData {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
}

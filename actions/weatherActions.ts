import { Dispatch } from 'redux';
import store from '../store';
import { GET_WEATHER, RootAction } from './types';

export function getWeatherData() {
  return {
    type: GET_WEATHER,
    data: [],
  };
}

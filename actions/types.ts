import { WeatherElement } from '../types/_types';

export type RootAction = WeatherActionTypes;

export const GET_WEATHER = 'GET_WEATHER';

type GetWeatherAction = {
  type: typeof GET_WEATHER;
  data: WeatherElement[];
  lastFetched: Date;
};

export type WeatherActionTypes = GetWeatherAction;

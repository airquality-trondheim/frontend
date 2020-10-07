import { Dispatch } from 'redux';
import { getWeatherDataForLocation } from '../queries/weather';
import { WeatherData } from '../types/_types';
import { GET_WEATHER, RootAction } from './types';

export async function getWeatherData(
  latitude: number,
  longitude: number,
  dispatch: Dispatch<RootAction>,
) {
  const weatherData: WeatherData | null = await getWeatherDataForLocation(
    latitude,
    longitude,
  );
  if (weatherData === null) {
    console.log('Feil');
    return;
  }
  dispatch({
    type: GET_WEATHER,
    data: weatherData.data,
    lastFetched: weatherData.lastFetched,
  });
}

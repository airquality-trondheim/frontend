import { Dispatch } from 'redux';
import { getWeatherDataForLocation } from '../queries/weather';
import store from '../store';
import { WeatherData } from '../types/_types';
import { GET_WEATHER, RootAction } from './types';

export async function getWeatherData(dispatch: Dispatch<RootAction>) {
  const currentLocation = store.getState().locations.currentLocation;
  if (currentLocation === null) {
    return;
  }
  const weatherData: WeatherData | null = await getWeatherDataForLocation(
    currentLocation.latitude,
    currentLocation.longitude,
  );
  if (weatherData === null) {
    return;
  }
  dispatch({
    type: GET_WEATHER,
    today: weatherData.today,
    tomorrow: weatherData.tomorrow,
    lastFetched: weatherData.lastFetched,
  });
}

/*
Example: Moholt
https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=63.4099&lon=10.4359
*/
import axios from 'axios';
import store from '../store';
import { WeatherData, WeatherElement } from '../types/_types';
const baseUrl = 'https://api.met.no/weatherapi/locationforecast/2.0/compact?';

function getUrl(latitude: number, longitude: number): string {
  return baseUrl + 'lat=' + latitude + '&' + 'lon=' + longitude;
}

function createWeatherObject(
  time: string,
  temp: number,
  windSpeed: number,
  rain: number,
  symbol: string,
): WeatherElement {
  return { time, temp, windSpeed, rain, symbol };
}

async function isModified(url: string) {
  const lastFetched = store.getState().weather.lastFetched;
  try {
    const headers = {
      'User-Agent': 'NTNU-Kundestyrtprosjekt sunniva.bk@gmail.com',
      'If-Modified-Since': lastFetched.toUTCString(),
    };
    let res = await axios.head(url, { headers });
    const lastUpdated = new Date(res.headers['last-modified']);
    if (lastFetched > lastUpdated) {
      return false;
    }
    return true;
  } catch (error) {
    console.log(error.response['status']);
    return false;
  }
}

export async function getWeatherDataForLocation(
  latitude: number,
  longitude: number,
): Promise<WeatherData | null> {
  console.log('Fetching');
  const lastFetched = store.getState().weather.lastFetched;
  const headers = {
    'User-Agent': 'NTNU-Kundestyrtprosjekt sunniva.bk@gmail.com',
    'If-Modified-Since': lastFetched.toUTCString(),
  };
  try {
    let res = await axios.get(getUrl(latitude, longitude), { headers });
    console.log(res.headers['last-modified']);
    const updatedLastFetched = new Date(res.headers['last-modified']);
    const object = res.data.properties.timeseries[0].data;
    const time = res.data.properties.timeseries[0].time;
    const temp = object.instant.details.air_temperature;
    const windSpeed = object.instant.details.wind_speed;
    const rain = object.next_1_hours.details.precipitation_amount;
    const symbol = object.next_1_hours.summary.symbol_code;
    const weather = createWeatherObject(time, temp, windSpeed, rain, symbol);
    console.log('weather', weather);
    return { data: [weather], lastFetched: updatedLastFetched };
  } catch (error) {
    console.log(error.response['status']);
    return null;
  }
}

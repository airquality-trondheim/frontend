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

export async function getWeatherDataForLocation(
  latitude: number,
  longitude: number,
): Promise<WeatherData | null> {
  const lastFetched = store.getState().weather.lastFetched;
  const headers = {
    'User-Agent': 'NTNU-Kundestyrtprosjekt sunniva.bk@gmail.com',
    'If-Modified-Since': lastFetched.toUTCString(),
  };
  function setTime(time: string) {
    let currentTime = new Date().getHours();
    let dataTime = parseInt(time.split('T')[1].split(':')[0], 10);
    return currentTime - dataTime;
  }
  try {
    const forecastToday: WeatherElement[] = [];
    const forecastTomorrow: WeatherElement[] = [];
    let res = await axios.get(getUrl(latitude, longitude), { headers });
    console.log(res.headers['last-modified']);
    const updatedLastFetched = new Date(res.headers['last-modified']);
    const currentDate = new Date().getDate();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    let counter = setTime(res.data.properties.timeseries[0].time);
    while (true) {
      const object = res.data.properties.timeseries[counter].data;
      const time = res.data.properties.timeseries[counter].time;
      const date = new Date(
        res.data.properties.timeseries[counter].time,
      ).getDate();
      const temp = object.instant.details.air_temperature;
      const windSpeed = object.instant.details.wind_speed;
      const rain = object.next_1_hours.details.precipitation_amount;
      const symbol = `https://frisk-airquality.s3.eu-central-1.amazonaws.com/weathericons/png/${object.next_1_hours.summary.symbol_code}.png`; // eslint-disable-line
      const weather = createWeatherObject(time, temp, windSpeed, rain, symbol);
      if (currentDate === date) {
        forecastToday.push(weather);
      } else if (tomorrow.getDate() === date) {
        forecastTomorrow.push(weather);
      } else {
        break;
      }
      counter += 1;
    }
    return {
      today: forecastToday,
      tomorrow: forecastTomorrow,
      lastFetched: updatedLastFetched,
    };
  } catch (error) {
    console.log(error.response['status']);
    return null;
  }
}

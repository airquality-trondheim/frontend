/*
Example: Moholt
https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=63.4099&lon=10.4359
*/
import axios from 'axios';
import { useState } from 'react';
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
  try {
    const forecast: WeatherElement[] = [];
    let counter = 0;
    let res = await axios.get(getUrl(latitude, longitude), { headers });
    console.log(res.headers['last-modified']);
    const updatedLastFetched = new Date(res.headers['last-modified']);
    while (counter < 48) {
      const object = res.data.properties.timeseries[counter].data;
      const time = res.data.properties.timeseries[counter].time;
      const temp = object.instant.details.air_temperature;
      const windSpeed = object.instant.details.wind_speed;
      const rain = object.next_1_hours.details.precipitation_amount;
      const symbol = `../assets/images/png/${object.next_1_hours.summary.symbol_code}.png`;
      const weather = createWeatherObject(time, temp, windSpeed, rain, symbol);
      forecast.push(weather);
      console.log(symbol);
      console.log('weather', weather);
      counter += 1;
    }
    return { data: forecast, lastFetched: updatedLastFetched };
  } catch (error) {
    console.log(error.response['status']);
    return null;
  }
}

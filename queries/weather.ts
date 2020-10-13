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
  function setTime(time: string) {
    let currentTime = new Date().getHours();
    let dataTime = parseInt(time.split('T')[1].split(':')[0], 10);
    return (
      console.log('current', currentTime, 'data:', dataTime),
      currentTime - dataTime
    );
  }
  try {
    const forecast: WeatherElement[] = [];
    let res = await axios.get(getUrl(latitude, longitude), { headers });
    console.log(res.headers['last-modified']);
    const updatedLastFetched = new Date(res.headers['last-modified']);
    let counter = setTime(res.data.properties.timeseries[0].time);
    while (counter < 48) {
      console.log('counter', counter);
      console.log(res.data.properties.timeseries[counter].data);
      const object = res.data.properties.timeseries[counter].data;
      const time = res.data.properties.timeseries[counter].time;
      const temp = object.instant.details.air_temperature;
      const windSpeed = object.instant.details.wind_speed;
      const rain = object.next_1_hours.details.precipitation_amount;
      const symbol = `../assets/images/png/${object.next_1_hours.summary.symbol_code}.png`;
      const weather = createWeatherObject(time, temp, windSpeed, rain, symbol);
      forecast.push(weather);
      counter += 1;
    }
    return { data: forecast, lastFetched: updatedLastFetched };
  } catch (error) {
    console.log(error.response['status']);
    return null;
  }
}

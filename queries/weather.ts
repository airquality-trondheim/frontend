/*
Example: Moholt
https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=63.4099&lon=10.4359
*/
import axios, { AxiosRequestConfig } from 'axios';
import { getWeatherData } from '../actions/weatherActions';

const baseUrl = 'https://api.met.no/weatherapi/locationforecast/2.0/compact?';
const testUrl =
  'https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=63.4099&lon=10.4359';

function getUrl(latitude: number, longitude: number): string {
  return baseUrl + 'lat=' + latitude + 'lon=' + longitude;
}

const exampleHeader = {
  date: 'Thu, 24 Sep 2020 14:58:26 GMT',
  expires: 'Thu, 24 Sep 2020 15:12:34 GMT',
  'last-modified': 'Thu, 24 Sep 2020 14:41:07 GMT',
};

function createWeatherObject(
  time: string,
  temp: number,
  windspeed: number,
  rain: number,
  symbol: string,
) {
  return { time, temp, windspeed, rain, symbol };
}

let expires = new Date('Thu, 24 Sep 2020 16:00:36 GMT'); // Endret her
async function isModified(url: string) {
  const currentDate = new Date(); // Endret her
  if (currentDate < expires) {
    console.log(expires);
    return false;
  }
  let res = await axios(url);
  const object = res.data.properties.timeseries[0].data;
  const time = res.data.properties.timeseries[0].time;
  const temp = object.instant.details.air_temperature;
  const windSpeed = object.instant.details.wind_speed;
  const rain = object.next_1_hours.details.precipitation_amount;
  const symbol = object.next_1_hours.summary.symbol_code;
  const weather = createWeatherObject(time, temp, windSpeed, rain, symbol);
  console.log(weather);
  expires = new Date(res.headers['expires']); // Endret her
  return true;
}

export async function getWeatherDataForLocation(
  latitude: number,
  longitude: number,
) {
  if (!(await isModified(testUrl))) {
    // TODO testUrl => getUrl(latitude, longitude)
    console.log('Not modified');
    return;
  }
  const config: AxiosRequestConfig = {
    method: 'get',
    url: testUrl,
    headers: {
      'User-Agent': 'NTNU-Kundestyrtprosjekt sunniva.bk@gmail.com',
      'If-Modified-Since': 'Thu, 24 Sep 2020 14:58:26 GMT',
    },
  };
  console.log(testUrl);
  let res = await axios(config);
  console.log(res.status, res.statusText);
  console.log('Header', res.data.type);
  console.log('Body');
}

// TODO: Move to types
type WeatherObject = {
  air_temperature: number;
  wind_from_direction: number;
  wind_speed: number;
  precipitation_amount: number;
  symbol_code: string;
};

type WeatherData = {
  now: WeatherObject;
  next_hour: WeatherObject;
  in_2_hours: WeatherObject;
};

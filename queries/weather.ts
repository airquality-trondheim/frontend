/*
Example: Moholt
https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=63.4099&lon=10.4359
*/
import axios, { AxiosRequestConfig } from 'axios';

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

// TODO: Add to redux
let expires = 'Thu, 24 Sep 2020 16:00:36 GMT';

async function isModified(url: string) {
  const currentDate = new Date().toUTCString();
  if (currentDate < expires) {
    console.log(expires);
    return false;
  }
  let res = await axios.head(url);
  console.log(res.status, res.statusText);
  console.log('Header', res.headers);
  expires = res.headers['expires'];
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
      'User-Agent': 'School project',
      'If-Modified-Since': 'Thu, 24 Sep 2020 14:58:26 GMT',
    },
  };
  let res = await axios(config);
  console.log(res.status, res.statusText);
  console.log('Header', res.headers);
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

import '@testing-library/jest-native/extend-expect';
import { Image } from 'react-native';
import { cloudy } from './assets/images/cloudy.png';

jest.mock('./queries/airquality', () => {
  const aq = {
    location: 'Tiller',
    time: [
      {
        from: '2020-10-21T18:00:00Z',
        to: '2020-10-21T18:00:00Z',
        variables: {
          AQI: {
            value: 1.899999976158142,
            units: '1',
          },
          no2_concentration: {
            value: 60.23738479614258,
            units: 'ug/m3',
          },
          AQI_no2: {
            value: 1.600000023841858,
            units: '1',
          },
          no2_nonlocal_fraction: {
            value: 49,
            units: '%',
          },
          no2_local_fraction_traffic_exhaust: {
            value: 50,
            units: '%',
          },
          no2_local_fraction_shipping: {
            value: 0,
            units: '%',
          },
          no2_local_fraction_heating: {
            value: 0,
            units: '%',
          },
          no2_local_fraction_industry: {
            value: 0,
            units: '%',
          },
          pm10_concentration: {
            value: 38.77204132080078,
            units: 'ug/m3',
          },
          AQI_pm10: {
            value: 1.600000023841858,
            units: '1',
          },
          pm10_nonlocal_fraction: {
            value: 51,
            units: '%',
          },
          pm10_nonlocal_fraction_seasalt: {
            value: 0,
            units: '%',
          },
          pm10_local_fraction_traffic_exhaust: {
            value: 2,
            units: '%',
          },
          pm10_local_fraction_traffic_nonexhaust: {
            value: 2,
            units: '%',
          },
          pm10_local_fraction_shipping: {
            value: 0,
            units: '%',
          },
          pm10_local_fraction_heating: {
            value: 43,
            units: '%',
          },
          pm10_local_fraction_industry: {
            value: 0,
            units: '%',
          },
          pm25_concentration: {
            value: 29.402725219726562,
            units: 'ug/m3',
          },
          AQI_pm25: {
            value: 1.899999976158142,
            units: '1',
          },
          pm25_nonlocal_fraction: {
            value: 39,
            units: '%',
          },
          pm25_nonlocal_fraction_seasalt: {
            value: 0,
            units: '%',
          },
          pm25_local_fraction_traffic_exhaust: {
            value: 3,
            units: '%',
          },
          pm25_local_fraction_traffic_nonexhaust: {
            value: 1,
            units: '%',
          },
          pm25_local_fraction_shipping: {
            value: 0,
            units: '%',
          },
          pm25_local_fraction_heating: {
            value: 55,
            units: '%',
          },
          pm25_local_fraction_industry: {
            value: 0,
            units: '%',
          },
          o3_concentration: {
            value: 0.05723044276237488,
            units: 'ug/m3',
          },
          AQI_o3: {
            value: 1,
            units: '1',
          },
          o3_nonlocal_fraction: {
            value: 100,
            units: '%',
          },
        },
      },
      {
        from: '2020-10-21T19:00:00Z',
        to: '2020-10-21T19:00:00Z',
        variables: {
          AQI: {
            value: 2.0999999046325684,
            units: '1',
          },
          no2_concentration: {
            value: 65.02681732177734,
            units: 'ug/m3',
          },
          AQI_no2: {
            value: 1.600000023841858,
            units: '1',
          },
          no2_nonlocal_fraction: {
            value: 49,
            units: '%',
          },
          no2_local_fraction_traffic_exhaust: {
            value: 50,
            units: '%',
          },
          no2_local_fraction_shipping: {
            value: 0,
            units: '%',
          },
          no2_local_fraction_heating: {
            value: 0,
            units: '%',
          },
          no2_local_fraction_industry: {
            value: 0,
            units: '%',
          },
          pm10_concentration: {
            value: 43.3494758605957,
            units: 'ug/m3',
          },
          AQI_pm10: {
            value: 1.7000000476837158,
            units: '1',
          },
          pm10_nonlocal_fraction: {
            value: 52,
            units: '%',
          },
          pm10_nonlocal_fraction_seasalt: {
            value: 0,
            units: '%',
          },
          pm10_local_fraction_traffic_exhaust: {
            value: 3,
            units: '%',
          },
          pm10_local_fraction_traffic_nonexhaust: {
            value: 2,
            units: '%',
          },
          pm10_local_fraction_shipping: {
            value: 0,
            units: '%',
          },
          pm10_local_fraction_heating: {
            value: 41,
            units: '%',
          },
          pm10_local_fraction_industry: {
            value: 0,
            units: '%',
          },
          pm25_concentration: {
            value: 33.31485366821289,
            units: 'ug/m3',
          },
          AQI_pm25: {
            value: 2.0999999046325684,
            units: '1',
          },
          pm25_nonlocal_fraction: {
            value: 41,
            units: '%',
          },
          pm25_nonlocal_fraction_seasalt: {
            value: 0,
            units: '%',
          },
          pm25_local_fraction_traffic_exhaust: {
            value: 4,
            units: '%',
          },
          pm25_local_fraction_traffic_nonexhaust: {
            value: 1,
            units: '%',
          },
          pm25_local_fraction_shipping: {
            value: 0,
            units: '%',
          },
          pm25_local_fraction_heating: {
            value: 52,
            units: '%',
          },
          pm25_local_fraction_industry: {
            value: 0,
            units: '%',
          },
          o3_concentration: {
            value: 0.02421843633055687,
            units: 'ug/m3',
          },
          AQI_o3: {
            value: 1,
            units: '1',
          },
          o3_nonlocal_fraction: {
            value: 100,
            units: '%',
          },
        },
      },
    ],
    lastFetched: new Date(0),
  };
  return {
    getDataForComponent: jest.fn(() => Promise.resolve(aq)),
  };
});

jest.mock('./queries/weather', () => {
  const forecast = [];
  const cloudyUri = Image.resolveAssetSource(cloudy).uri;
  const forecastElement = {
    time: new Date().getUTCDate(),
    temp: 18,
    windSpeed: 1.8,
    rain: 0.0,
    symbol: cloudyUri,
  };
  for (let i = 0; i < 24; i++) {
    forecast.push(forecastElement);
  }
  const weatherData = {
    today: forecast,
    tomorrow: forecast,
    lastFetched: new Date(0),
  };
  return {
    getWeatherDataForLocation: jest.fn((lat, lon) =>
      Promise.resolve(weatherData),
    ),
  };
});

// From: https://stackoverflow.com/questions/40952566/how-to-test-async-storage-with-jest
jest.mock('@react-native-community/async-storage', () => ({
  AsyncStorage: {
    clear: jest.fn().mockName('clear'),
    getAllKeys: jest.fn().mockName('getAllKeys'),
    getItem: jest.fn().mockName('getItem'),
    removeItem: jest.fn().mockName('removeItem'),
    setItem: jest.fn().mockName('setItem'),
  },
}));

// All below from: https://github.com/bamlab/react-native-testing/blob/master/docs/tests.examples.md
// with minor changes
/**
 * Suppress React 16.8 act() warnings globally.
 * Waiting for react-native to support react 16.9
 */
const originalConsoleError = console.error;
console.error = (...args) => {
  if (/Warning.*You called act/.test(args[0])) {
    return;
  }
  originalConsoleError.call(console, ...args);
};

/**
 * Mock react-native-gesture-handler to render react navigation components and their animations
 */
jest.mock('react-native-gesture-handler', () => {
  const View = require('react-native/Libraries/Components/View/View');
  return {
    State: {},
    PanGestureHandler: View,
    BaseButton: View,
    Directions: {},
  };
});

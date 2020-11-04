import '@testing-library/jest-native/extend-expect';

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
  const weatherData = {
    lastFetched: '2020-10-30T15:42:47.000Z',
    today: [
      {
        rain: 0,
        symbol:
          'https://frisk-airquality.s3.eu-central-1.amazonaws.com/weathericons/png/fair_night.png',
        temp: 6.5,
        time: '2020-10-30T16:00:00Z',
        windSpeed: 5.6,
      },
      {
        rain: 0,
        symbol:
          'https://frisk-airquality.s3.eu-central-1.amazonaws.com/weathericons/png/cloudy.png',
        temp: 6.7,
        time: '2020-10-30T17:00:00Z',
        windSpeed: 6,
      },
      {
        rain: 0,
        symbol:
          'https://frisk-airquality.s3.eu-central-1.amazonaws.com/weathericons/png/cloudy.png',
        temp: 6.7,
        time: '2020-10-30T18:00:00Z',
        windSpeed: 5.9,
      },
      {
        rain: 0,
        symbol:
          'https://frisk-airquality.s3.eu-central-1.amazonaws.com/weathericons/png/cloudy.png',
        temp: 6.9,
        time: '2020-10-30T19:00:00Z',
        windSpeed: 4.5,
      },
      {
        rain: 0.6,
        symbol:
          'https://frisk-airquality.s3.eu-central-1.amazonaws.com/weathericons/png/rain.png',
        temp: 7,
        time: '2020-10-30T20:00:00Z',
        windSpeed: 3.2,
      },
      {
        rain: 0.8,
        symbol:
          'https://frisk-airquality.s3.eu-central-1.amazonaws.com/weathericons/png/rain.png',
        temp: 6.5,
        time: '2020-10-30T21:00:00Z',
        windSpeed: 3.4,
      },
      {
        rain: 0.7,
        symbol:
          'https://frisk-airquality.s3.eu-central-1.amazonaws.com/weathericons/png/rain.png',
        temp: 6.3,
        time: '2020-10-30T22:00:00Z',
        windSpeed: 2.9,
      },
      {
        rain: 1.2,
        symbol:
          'https://frisk-airquality.s3.eu-central-1.amazonaws.com/weathericons/png/heavyrain.png',
        temp: 6.1,
        time: '2020-10-30T23:00:00Z',
        windSpeed: 3.3,
      },
    ],
    tomorrow: [
      {
        rain: 0.6,
        symbol:
          'https://frisk-airquality.s3.eu-central-1.amazonaws.com/weathericons/png/rain.png',
        temp: 5.9,
        time: '2020-10-31T00:00:00Z',
        windSpeed: 3.1,
      },
      {
        rain: 0.6,
        symbol:
          'https://frisk-airquality.s3.eu-central-1.amazonaws.com/weathericons/png/rain.png',
        temp: 5.8,
        time: '2020-10-31T01:00:00Z',
        windSpeed: 3.6,
      },
      {
        rain: 0.3,
        symbol:
          'https://frisk-airquality.s3.eu-central-1.amazonaws.com/weathericons/png/rain.png',
        temp: 5.6,
        time: '2020-10-31T02:00:00Z',
        windSpeed: 3.4,
      },
      {
        rain: 0,
        symbol:
          'https://frisk-airquality.s3.eu-central-1.amazonaws.com/weathericons/png/cloudy.png',
        temp: 5.4,
        time: '2020-10-31T03:00:00Z',
        windSpeed: 3.4,
      },
      {
        rain: 0,
        symbol:
          'https://frisk-airquality.s3.eu-central-1.amazonaws.com/weathericons/png/cloudy.png',
        temp: 5,
        time: '2020-10-31T04:00:00Z',
        windSpeed: 3.4,
      },
      {
        rain: 0,
        symbol:
          'https://frisk-airquality.s3.eu-central-1.amazonaws.com/weathericons/png/partlycloudy_night.png',
        temp: 4.5,
        time: '2020-10-31T05:00:00Z',
        windSpeed: 3.3,
      },
      {
        rain: 0,
        symbol:
          'https://frisk-airquality.s3.eu-central-1.amazonaws.com/weathericons/png/clearsky_night.png',
        temp: 4.1,
        time: '2020-10-31T06:00:00Z',
        windSpeed: 3.5,
      },
      {
        rain: 0,
        symbol:
          'https://frisk-airquality.s3.eu-central-1.amazonaws.com/weathericons/png/clearsky_day.png',
        temp: 3.4,
        time: '2020-10-31T07:00:00Z',
        windSpeed: 3.5,
      },
      {
        rain: 0,
        symbol:
          'https://frisk-airquality.s3.eu-central-1.amazonaws.com/weathericons/png/clearsky_day.png',
        temp: 3.4,
        time: '2020-10-31T08:00:00Z',
        windSpeed: 3.4,
      },
      {
        rain: 0,
        symbol:
          'https://frisk-airquality.s3.eu-central-1.amazonaws.com/weathericons/png/clearsky_day.png',
        temp: 4,
        time: '2020-10-31T09:00:00Z',
        windSpeed: 3.2,
      },
      {
        rain: 0,
        symbol:
          'https://frisk-airquality.s3.eu-central-1.amazonaws.com/weathericons/png/clearsky_day.png',
        temp: 5.2,
        time: '2020-10-31T10:00:00Z',
        windSpeed: 2.5,
      },
      {
        rain: 0,
        symbol:
          'https://frisk-airquality.s3.eu-central-1.amazonaws.com/weathericons/png/clearsky_day.png',
        temp: 6.5,
        time: '2020-10-31T11:00:00Z',
        windSpeed: 0.6,
      },
      {
        rain: 0,
        symbol:
          'https://frisk-airquality.s3.eu-central-1.amazonaws.com/weathericons/png/clearsky_day.png',
        temp: 7.2,
        time: '2020-10-31T12:00:00Z',
        windSpeed: 0.9,
      },
      {
        rain: 0,
        symbol:
          'https://frisk-airquality.s3.eu-central-1.amazonaws.com/weathericons/png/clearsky_day.png',
        temp: 7.3,
        time: '2020-10-31T13:00:00Z',
        windSpeed: 1.1,
      },
      {
        rain: 0,
        symbol:
          'https://frisk-airquality.s3.eu-central-1.amazonaws.com/weathericons/png/clearsky_day.png',
        temp: 7.1,
        time: '2020-10-31T14:00:00Z',
        windSpeed: 2.6,
      },
      {
        rain: 0,
        symbol:
          'https://frisk-airquality.s3.eu-central-1.amazonaws.com/weathericons/png/clearsky_night.png',
        temp: 6.2,
        time: '2020-10-31T15:00:00Z',
        windSpeed: 4.5,
      },
      {
        rain: 0,
        symbol:
          'https://frisk-airquality.s3.eu-central-1.amazonaws.com/weathericons/png/partlycloudy_night.png',
        temp: 5.7,
        time: '2020-10-31T16:00:00Z',
        windSpeed: 5.6,
      },
      {
        rain: 0,
        symbol:
          'https://frisk-airquality.s3.eu-central-1.amazonaws.com/weathericons/png/partlycloudy_night.png',
        temp: 5.4,
        time: '2020-10-31T17:00:00Z',
        windSpeed: 4.5,
      },
      {
        rain: 0,
        symbol:
          'https://frisk-airquality.s3.eu-central-1.amazonaws.com/weathericons/png/partlycloudy_night.png',
        temp: 5.5,
        time: '2020-10-31T18:00:00Z',
        windSpeed: 4.7,
      },
      {
        rain: 0,
        symbol:
          'https://frisk-airquality.s3.eu-central-1.amazonaws.com/weathericons/png/partlycloudy_night.png',
        temp: 5.9,
        time: '2020-10-31T19:00:00Z',
        windSpeed: 4.6,
      },
      {
        rain: 0,
        symbol:
          'https://frisk-airquality.s3.eu-central-1.amazonaws.com/weathericons/png/partlycloudy_night.png',
        temp: 5.9,
        time: '2020-10-31T20:00:00Z',
        windSpeed: 3.6,
      },
      {
        rain: 0,
        symbol:
          'https://frisk-airquality.s3.eu-central-1.amazonaws.com/weathericons/png/partlycloudy_night.png',
        temp: 6.1,
        time: '2020-10-31T21:00:00Z',
        windSpeed: 3.8,
      },
      {
        rain: 0,
        symbol:
          'https://frisk-airquality.s3.eu-central-1.amazonaws.com/weathericons/png/cloudy.png',
        temp: 6.7,
        time: '2020-10-31T22:00:00Z',
        windSpeed: 5.2,
      },
      {
        rain: 0,
        symbol:
          'https://frisk-airquality.s3.eu-central-1.amazonaws.com/weathericons/png/cloudy.png',
        temp: 7.5,
        time: '2020-10-31T23:00:00Z',
        windSpeed: 7.2,
      },
    ],
  };
  return {
    getWeatherDataForLocation: jest.fn(() => Promise.resolve(weatherData)),
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

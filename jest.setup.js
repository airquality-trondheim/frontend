import '@testing-library/jest-native/extend-expect';

jest.mock('./queries/airquality', () => {
  const aqData = {
    AQI: {
      todayData: [
        {
          clock: '12',
          value: 1.6651780605316162,
        },
        {
          clock: '13',
          value: 1.659645438194275,
        },
        {
          clock: '14',
          value: 1.6327588558197021,
        },
        {
          clock: '15',
          value: 1.618269443511963,
        },
        {
          clock: '16',
          value: 1.6087288856506348,
        },
        {
          clock: '17',
          value: 1.6182769536972046,
        },
        {
          clock: '18',
          value: 1.6488025188446045,
        },
        {
          clock: '19',
          value: 1.6992524862289429,
        },
        {
          clock: '20',
          value: 1.7367111444473267,
        },
        {
          clock: '21',
          value: 1.7536286115646362,
        },
        {
          clock: '22',
          value: 1.7488516569137573,
        },
        {
          clock: '23',
          value: 1.764865517616272,
        },
      ],
      tomorrowData: [
        {
          clock: '00',
          value: 1.7880302667617798,
        },
        {
          clock: '01',
          value: 1.7930593490600586,
        },
        {
          clock: '02',
          value: 1.7969927787780762,
        },
        {
          clock: '03',
          value: 1.8139712810516357,
        },
        {
          clock: '04',
          value: 1.8315247297286987,
        },
        {
          clock: '05',
          value: 1.841115951538086,
        },
        {
          clock: '06',
          value: 1.848763346672058,
        },
        {
          clock: '07',
          value: 1.843390941619873,
        },
        {
          clock: '08',
          value: 1.8558858633041382,
        },
        {
          clock: '09',
          value: 1.8603383302688599,
        },
        {
          clock: '10',
          value: 1.8607524633407593,
        },
        {
          clock: '11',
          value: 1.8543497323989868,
        },
        {
          clock: '12',
          value: 1.8444327116012573,
        },
        {
          clock: '13',
          value: 1.8381495475769043,
        },
        {
          clock: '14',
          value: 1.8298171758651733,
        },
        {
          clock: '15',
          value: 1.8201091289520264,
        },
        {
          clock: '16',
          value: 1.8262046575546265,
        },
        {
          clock: '17',
          value: 1.8244483470916748,
        },
        {
          clock: '18',
          value: 1.803666114807129,
        },
        {
          clock: '19',
          value: 1.7845289707183838,
        },
        {
          clock: '20',
          value: 1.7790905237197876,
        },
        {
          clock: '21',
          value: 1.7569901943206787,
        },
        {
          clock: '22',
          value: 1.747870922088623,
        },
        {
          clock: '23',
          value: 1.7524503469467163,
        },
      ],
    },
    NO2_AQI: {
      todayData: [
        {
          clock: '12',
          value: 1.0139050483703613,
        },
        {
          clock: '13',
          value: 1.0145773887634277,
        },
        {
          clock: '14',
          value: 1.0180741548538208,
        },
        {
          clock: '15',
          value: 1.0249395370483398,
        },
        {
          clock: '16',
          value: 1.0216139554977417,
        },
        {
          clock: '17',
          value: 1.0210353136062622,
        },
        {
          clock: '18',
          value: 1.0189164876937866,
        },
        {
          clock: '19',
          value: 1.0151433944702148,
        },
        {
          clock: '20',
          value: 1.0107405185699463,
        },
        {
          clock: '21',
          value: 1.0073343515396118,
        },
        {
          clock: '22',
          value: 1.0064870119094849,
        },
        {
          clock: '23',
          value: 1.0038443803787231,
        },
      ],
      tomorrowData: [
        {
          clock: '00',
          value: 1.0037317276000977,
        },
        {
          clock: '01',
          value: 1.0039098262786865,
        },
        {
          clock: '02',
          value: 1.0036810636520386,
        },
        {
          clock: '03',
          value: 1.0052865743637085,
        },
        {
          clock: '04',
          value: 1.0079213380813599,
        },
        {
          clock: '05',
          value: 1.0078774690628052,
        },
        {
          clock: '06',
          value: 1.010348916053772,
        },
        {
          clock: '07',
          value: 1.0115702152252197,
        },
        {
          clock: '08',
          value: 1.0109485387802124,
        },
        {
          clock: '09',
          value: 1.011292576789856,
        },
        {
          clock: '10',
          value: 1.0117379426956177,
        },
        {
          clock: '11',
          value: 1.0120681524276733,
        },
        {
          clock: '12',
          value: 1.0130829811096191,
        },
        {
          clock: '13',
          value: 1.0146682262420654,
        },
        {
          clock: '14',
          value: 1.0171436071395874,
        },
        {
          clock: '15',
          value: 1.0213007926940918,
        },
        {
          clock: '16',
          value: 1.0249872207641602,
        },
        {
          clock: '17',
          value: 1.0301439762115479,
        },
        {
          clock: '18',
          value: 1.0367478132247925,
        },
        {
          clock: '19',
          value: 1.0186101198196411,
        },
        {
          clock: '20',
          value: 1.0059529542922974,
        },
        {
          clock: '21',
          value: 1.007401466369629,
        },
        {
          clock: '22',
          value: 1.010172963142395,
        },
        {
          clock: '23',
          value: 1.0080640316009521,
        },
      ],
    },
    PM10_AQI: {
      todayData: [
        {
          clock: '12',
          value: 1.012184500694275,
        },
        {
          clock: '13',
          value: 1.016499400138855,
        },
        {
          clock: '14',
          value: 1.0161771774291992,
        },
        {
          clock: '15',
          value: 1.014709711074829,
        },
        {
          clock: '16',
          value: 1.0189447402954102,
        },
        {
          clock: '17',
          value: 1.0267651081085205,
        },
        {
          clock: '18',
          value: 1.0740959644317627,
        },
        {
          clock: '19',
          value: 1.120990514755249,
        },
        {
          clock: '20',
          value: 1.188645839691162,
        },
        {
          clock: '21',
          value: 1.1953322887420654,
        },
        {
          clock: '22',
          value: 1.174064040184021,
        },
        {
          clock: '23',
          value: 1.121856451034546,
        },
      ],
      tomorrowData: [
        {
          clock: '00',
          value: 1.0480973720550537,
        },
        {
          clock: '01',
          value: 1.01243257522583,
        },
        {
          clock: '02',
          value: 1.007818341255188,
        },
        {
          clock: '03',
          value: 1.008947491645813,
        },
        {
          clock: '04',
          value: 1.020314335823059,
        },
        {
          clock: '05',
          value: 1.0556780099868774,
        },
        {
          clock: '06',
          value: 1.097804069519043,
        },
        {
          clock: '07',
          value: 1.1545709371566772,
        },
        {
          clock: '08',
          value: 1.3263572454452515,
        },
        {
          clock: '09',
          value: 1.4497309923171997,
        },
        {
          clock: '10',
          value: 1.5376290082931519,
        },
        {
          clock: '11',
          value: 1.5415334701538086,
        },
        {
          clock: '12',
          value: 1.5689632892608643,
        },
        {
          clock: '13',
          value: 1.5856120586395264,
        },
        {
          clock: '14',
          value: 1.5481517314910889,
        },
        {
          clock: '15',
          value: 1.5016645193099976,
        },
        {
          clock: '16',
          value: 1.3774263858795166,
        },
        {
          clock: '17',
          value: 1.208942174911499,
        },
        {
          clock: '18',
          value: 1.0704447031021118,
        },
        {
          clock: '19',
          value: 1.0182980298995972,
        },
        {
          clock: '20',
          value: 1.017242670059204,
        },
        {
          clock: '21',
          value: 1.015322208404541,
        },
        {
          clock: '22',
          value: 1.0294997692108154,
        },
        {
          clock: '23',
          value: 1.0586146116256714,
        },
      ],
    },
    PM25_AQI: {
      todayData: [
        {
          clock: '12',
          value: 1,
        },
        {
          clock: '13',
          value: 1,
        },
        {
          clock: '14',
          value: 1,
        },
        {
          clock: '15',
          value: 1,
        },
        {
          clock: '16',
          value: 1.100000023841858,
        },
        {
          clock: '17',
          value: 1,
        },
        {
          clock: '18',
          value: 1,
        },
        {
          clock: '19',
          value: 1,
        },
        {
          clock: '20',
          value: 1.100000023841858,
        },
        {
          clock: '21',
          value: 1,
        },
        {
          clock: '22',
          value: 1,
        },
        {
          clock: '23',
          value: 1,
        },
      ],
      tomorrowData: [
        {
          clock: '00',
          value: 1,
        },
        {
          clock: '01',
          value: 1,
        },
        {
          clock: '02',
          value: 1,
        },
        {
          clock: '03',
          value: 1,
        },
        {
          clock: '04',
          value: 1,
        },
        {
          clock: '05',
          value: 1,
        },
        {
          clock: '06',
          value: 1,
        },
        {
          clock: '07',
          value: 1,
        },
        {
          clock: '08',
          value: 1,
        },
        {
          clock: '09',
          value: 1.100000023841858,
        },
        {
          clock: '10',
          value: 1.100000023841858,
        },
        {
          clock: '11',
          value: 1.100000023841858,
        },
        {
          clock: '12',
          value: 1.100000023841858,
        },
        {
          clock: '13',
          value: 1.100000023841858,
        },
        {
          clock: '14',
          value: 1.100000023841858,
        },
        {
          clock: '15',
          value: 1.100000023841858,
        },
        {
          clock: '16',
          value: 1.100000023841858,
        },
        {
          clock: '17',
          value: 1.100000023841858,
        },
        {
          clock: '18',
          value: 1,
        },
        {
          clock: '19',
          value: 1,
        },
        {
          clock: '20',
          value: 1,
        },
        {
          clock: '21',
          value: 1,
        },
        {
          clock: '22',
          value: 1,
        },
        {
          clock: '23',
          value: 1,
        },
      ],
    },
    areacode: 'Omkjori',
    index: 2,
  };
  return {
    fetchAirqualityDataForLocation: jest.fn(() => Promise.resolve(aqData)),
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

jest.mock('./queries/locations', () => {
  return {
    fetchLocations: jest.fn(() => Promise.resolve([])),
    fetchStations: jest.fn(() => Promise.resolve([])),
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

// Silence the warning https://github.com/facebook/react-native/issues/11094#issuecomment-263240420
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

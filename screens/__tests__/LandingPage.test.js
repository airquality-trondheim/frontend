import React from 'react';
import {
  fireEvent,
  cleanup,
  act,
  waitFor,
} from '@testing-library/react-native';

import 'react-native-gesture-handler';
import { HomeNavigator } from '../../navigation/BottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { renderPage } from '../../utils/tests/helpers';

import {
  airQuality,
  AQLevel,
} from '../../components/airquality/AirQualityInfo';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

// Silence the warning https://github.com/facebook/react-native/issues/11094#issuecomment-263240420
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

afterEach(cleanup);

describe('Landing page', () => {
  it('renders without crashing', async () => {
    const component = (
      <NavigationContainer>
        <HomeNavigator />
      </NavigationContainer>
    );
    const rendered = renderPage(component).toJSON();
    await act(async () => {});
    expect(rendered).toBeDefined();
  });

  it('displays airquality 1', async () => {
    const component = (
      <NavigationContainer>
        <HomeNavigator />
      </NavigationContainer>
    );
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
        ],
      },
      areacode: 'Omkjori',
      index: 2,
    };
    const page = renderPage(component, { airquality: aqData });

    const aqInstance = await waitFor(() =>
      page.queryByAccessibilityLabel('Air quality overview'),
    );
    expect(aqInstance).toBeTruthy();

    const aqTextInstance = await waitFor(() =>
      page.queryByAccessibilityLabel('AQI text'),
    );
    expect(aqTextInstance).toBeTruthy();
    expect(aqTextInstance.children[0]).toEqual(airQuality[1]);

    const pm10 = page.getByAccessibilityLabel('PM10');
    const pm25 = page.getByAccessibilityLabel('PM2.5');
    const no2 = page.getByAccessibilityLabel('NO2');

    expect(pm10.children[0]).toEqual(AQLevel[1]);
    expect(pm25.children[0]).toEqual(AQLevel[1]);
    expect(no2.children[0]).toEqual(AQLevel[1]);
  });

  it('displays airquality 2', async () => {
    const component = (
      <NavigationContainer>
        <HomeNavigator />
      </NavigationContainer>
    );
    const aqData = {
      AQI: {
        todayData: [
          {
            clock: '12',
            value: 2.6651780605316162,
          },
          {
            clock: '13',
            value: 1.659645438194275,
          },
          {
            clock: '14',
            value: 2.6327588558197021,
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
            value: 2.0145773887634277,
          },
          {
            clock: '14',
            value: 2.0180741548538208,
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
            value: 2.0161771774291992,
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
        ],
      },
      PM25_AQI: {
        todayData: [
          {
            clock: '12',
            value: 2,
          },
          {
            clock: '13',
            value: 2,
          },
          {
            clock: '14',
            value: 2,
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
        ],
      },
      areacode: 'Omkjori',
      index: 2,
    };
    const page = renderPage(component, { airquality: aqData });

    const aqInstance = await waitFor(() =>
      page.queryByAccessibilityLabel('Air quality overview'),
    );
    expect(aqInstance).toBeTruthy();

    const aqTextInstance = await waitFor(() =>
      page.queryByAccessibilityLabel('AQI text'),
    );
    expect(aqTextInstance).toBeTruthy();
    expect(aqTextInstance.children[0]).toEqual(airQuality[2]);

    const pm10 = page.getByAccessibilityLabel('PM10');
    const pm25 = page.getByAccessibilityLabel('PM2.5');
    const no2 = page.getByAccessibilityLabel('NO2');

    expect(pm10.children[0]).toEqual(AQLevel[2]);
    expect(pm25.children[0]).toEqual(AQLevel[2]);
    expect(no2.children[0]).toEqual(AQLevel[2]);
  });

  it('displays airquality 3', async () => {
    const component = (
      <NavigationContainer>
        <HomeNavigator />
      </NavigationContainer>
    );
    const aqData = {
      AQI: {
        todayData: [
          {
            clock: '12',
            value: 3.6651780605316162,
          },
          {
            clock: '13',
            value: 1.659645438194275,
          },
          {
            clock: '14',
            value: 3.6327588558197021,
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
            value: 3.0145773887634277,
          },
          {
            clock: '14',
            value: 3.0180741548538208,
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
            value: 3.0161771774291992,
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
        ],
      },
      PM25_AQI: {
        todayData: [
          {
            clock: '12',
            value: 3,
          },
          {
            clock: '13',
            value: 3,
          },
          {
            clock: '14',
            value: 3,
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
        ],
      },
      areacode: 'Omkjori',
      index: 2,
    };
    const page = renderPage(component, { airquality: aqData });

    const aqInstance = await waitFor(() =>
      page.queryByAccessibilityLabel('Air quality overview'),
    );
    expect(aqInstance).toBeTruthy();

    const aqTextInstance = await waitFor(() =>
      page.queryByAccessibilityLabel('AQI text'),
    );
    expect(aqTextInstance).toBeTruthy();
    expect(aqTextInstance.children[0]).toEqual(airQuality[3]);

    const pm10 = page.getByAccessibilityLabel('PM10');
    const pm25 = page.getByAccessibilityLabel('PM2.5');
    const no2 = page.getByAccessibilityLabel('NO2');

    expect(pm10.children[0]).toEqual(AQLevel[3]);
    expect(pm25.children[0]).toEqual(AQLevel[3]);
    expect(no2.children[0]).toEqual(AQLevel[3]);
  });

  it('displays airquality 4', async () => {
    const component = (
      <NavigationContainer>
        <HomeNavigator />
      </NavigationContainer>
    );
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
            value: 4.6327588558197021,
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
            value: 4.0180741548538208,
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
            value: 4.0161771774291992,
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
            value: 4,
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
        ],
      },
      areacode: 'Omkjori',
      index: 2,
    };
    const page = renderPage(component, { airquality: aqData });

    const aqInstance = await waitFor(() =>
      page.queryByAccessibilityLabel('Air quality overview'),
    );
    expect(aqInstance).toBeTruthy();

    const aqTextInstance = await waitFor(() =>
      page.queryByAccessibilityLabel('AQI text'),
    );
    expect(aqTextInstance).toBeTruthy();
    expect(aqTextInstance.children[0]).toEqual(airQuality[4]);

    const pm10 = page.getByAccessibilityLabel('PM10');
    const pm25 = page.getByAccessibilityLabel('PM2.5');
    const no2 = page.getByAccessibilityLabel('NO2');

    expect(pm10.children[0]).toEqual(AQLevel[4]);
    expect(pm25.children[0]).toEqual(AQLevel[4]);
    expect(no2.children[0]).toEqual(AQLevel[4]);
  });

  it('displays different airqualities', async () => {
    const component = (
      <NavigationContainer>
        <HomeNavigator />
      </NavigationContainer>
    );
    const aqData = {
      AQI: {
        todayData: [
          {
            clock: '12',
            value: 1.6651780605316162,
          },
          {
            clock: '13',
            value: 2.659645438194275,
          },
          {
            clock: '14',
            value: 4.6327588558197021,
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
            value: 4.0180741548538208,
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
            value: 3.016499400138855,
          },
          {
            clock: '14',
            value: 4.0161771774291992,
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
        ],
      },
      PM25_AQI: {
        todayData: [
          {
            clock: '12',
            value: 3,
          },
          {
            clock: '13',
            value: 4,
          },
          {
            clock: '14',
            value: 4,
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
        ],
      },
      areacode: 'Omkjori',
      index: 1,
    };
    const page = renderPage(component, { airquality: aqData });

    const aqInstance = await waitFor(() =>
      page.queryByAccessibilityLabel('Air quality overview'),
    );
    expect(aqInstance).toBeTruthy();

    const aqTextInstance = await waitFor(() =>
      page.queryByAccessibilityLabel('AQI text'),
    );
    expect(aqTextInstance).toBeTruthy();
    expect(aqTextInstance.children[0]).toEqual(airQuality[2]);

    const pm10 = page.getByAccessibilityLabel('PM10');
    const pm25 = page.getByAccessibilityLabel('PM2.5');
    const no2 = page.getByAccessibilityLabel('NO2');

    expect(pm10.children[0]).toEqual(AQLevel[3]);
    expect(pm25.children[0]).toEqual(AQLevel[4]);
    expect(no2.children[0]).toEqual(AQLevel[1]);
  });

  it('navigates to weather screen', async () => {
    const component = (
      <NavigationContainer>
        <HomeNavigator />
      </NavigationContainer>
    );
    const page = renderPage(component);

    const homeScreen = await waitFor(() =>
      page.queryByAccessibilityLabel('Home screen'),
    );
    const weatherScreen = await waitFor(() =>
      page.queryByAccessibilityLabel('Weather screen'),
    );
    expect(homeScreen).toBeTruthy();
    expect(weatherScreen).toBeFalsy();

    const toClick = page.getByText('Vær');
    expect(toClick).toBeTruthy();

    fireEvent(toClick, 'press');

    const weatherScreen2 = await waitFor(() =>
      page.queryByAccessibilityLabel('Weather screen'),
    );

    expect(weatherScreen2).toBeTruthy();
  });

  it('navigates to air quality screen', async () => {
    const component = (
      <NavigationContainer>
        <HomeNavigator />
      </NavigationContainer>
    );
    const page = renderPage(component);

    const homeScreen = await waitFor(() =>
      page.queryByAccessibilityLabel('Home screen'),
    );
    const aqScreen = await waitFor(() =>
      page.queryByAccessibilityLabel('Air quality screen'),
    );
    expect(homeScreen).toBeTruthy();
    expect(aqScreen).toBeFalsy();

    const toClick = page.getByText('Luft');
    expect(toClick).toBeTruthy();

    fireEvent(toClick, 'press');

    const aqScreen2 = await waitFor(() =>
      page.queryByAccessibilityLabel('Air quality screen'),
    );
    expect(aqScreen2).toBeTruthy();
  });
});

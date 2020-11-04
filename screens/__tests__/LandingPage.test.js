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

  it('displays airquality', async () => {
    const component = (
      <NavigationContainer>
        <HomeNavigator />
      </NavigationContainer>
    );
    const page = renderPage(component);
    await act(async () => {});

    const airQualityText = page.getAllByText('Utmerket');
    const pm10Text = page.getByText('39');
    const pm25Text = page.getByText('29');
    const no2Text = page.getByText('60');

    expect(airQualityText.length).toBe(2); // Modal + skjerm
    expect(pm10Text).toBeTruthy();
    expect(pm25Text).toBeTruthy();
    expect(no2Text).toBeTruthy();
  });

  it('navigates to weather screen', async () => {
    const component = (
      <NavigationContainer>
        <HomeNavigator />
      </NavigationContainer>
    );
    const page = renderPage(component);

    const screen = await waitFor(() =>
      page.queryByAccessibilityLabel('HomeScreen'),
    );
    expect(screen).toBeTruthy();

    const toClick = page.getByText('Vær');
    expect(toClick).toBeTruthy();

    fireEvent(toClick, 'press');

    const newScreen = await waitFor(() =>
      page.queryByAccessibilityLabel('WeatherScreen'),
    );
    const newSubHeader1 = await waitFor(() => page.queryByText(' Nå '));
    const newSubHeader2 = await waitFor(() => page.queryByText('I dag'));
    const newSubHeader3 = await waitFor(() => page.queryByText('I morgen'));

    expect(newScreen).toBeTruthy();
    expect(newSubHeader1).toBeTruthy();
    expect(newSubHeader2).toBeTruthy();
    expect(newSubHeader3).toBeTruthy();
  });
});

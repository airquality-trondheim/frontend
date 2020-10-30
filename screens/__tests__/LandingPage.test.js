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

  it('navigates to weather screen', async () => {
    const component = (
      <NavigationContainer>
        <HomeNavigator />
      </NavigationContainer>
    );
    const page = renderPage(component);

    const toClick = page.getByText('Vær');
    expect(toClick).toBeTruthy();

    fireEvent(toClick, 'press');

    const newSubHeader1 = waitFor(() => page.queyByText('Nå'));
    const newSubHeader2 = waitFor(() => page.queyByText('I dag'));
    const newSubHeader3 = waitFor(() => page.findByText('I morgen'));

    expect(newSubHeader1).toBeTruthy();
    expect(newSubHeader2).toBeTruthy();
    expect(newSubHeader3).toBeTruthy();
  });
});

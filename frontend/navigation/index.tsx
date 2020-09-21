import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'native-base';
import * as React from 'react';
import { ColorSchemeName, Image, ImageSourcePropType } from 'react-native';
import { wind, snake } from '../assets/images';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function createHeaderButton(source: ImageSourcePropType) {
  return (
    <Button transparent>
      <Image source={source} style={{ width: 50, height: 50 }} />
    </Button>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => createHeaderButton(wind),
        headerRight: () => createHeaderButton(snake),
        headerTitleAlign: 'center',
        title: 'Air Quality',
      }}
    >
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
    </Stack.Navigator>
  );
}

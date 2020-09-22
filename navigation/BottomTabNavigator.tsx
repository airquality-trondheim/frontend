import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import CompetitionPage from '../screens/CompetitionPage';
import LandingPage from '../screens/LandingPage';
import TabTwoScreen from '../screens/TabTwoScreen';
import {
  BottomTabParamList,
  CompetitionParamList,
  HomeParamList,
  TabTwoParamList,
} from '../types/_types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

function createTabBarIcon(name: string, color: string) {
  return <TabBarIcon name={name} color={color} />;
}

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        showLabel: false,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => createTabBarIcon('md-home', color),
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => createTabBarIcon('ios-code', color),
        }}
      />
      <BottomTab.Screen
        name="Competition"
        component={CompetitionNavigator}
        options={{
          tabBarIcon: ({ color }) => createTabBarIcon('md-trophy', color),
        }}
      />
    </BottomTab.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="LandingPage" component={LandingPage} />
    </HomeStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen name="TabTwoScreen" component={TabTwoScreen} />
    </TabTwoStack.Navigator>
  );
}

const CompetitionStack = createStackNavigator<CompetitionParamList>();

function CompetitionNavigator() {
  return (
    <CompetitionStack.Navigator>
      <CompetitionStack.Screen
        name="CompetitionPage"
        component={CompetitionPage}
      />
    </CompetitionStack.Navigator>
  );
}

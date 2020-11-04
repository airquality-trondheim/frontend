import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import CompetitionPage from '../screens/CompetitionPage';
import LandingPage from '../screens/LandingPage';
import {
  BottomTabParamList,
  CompetitionParamList,
  ProfileParamList,
  HomeParamList,
  MapParamList,
} from '../types/_types';
import WeatherScreen from '../screens/WeatherScreen';
import MapPage from '../screens/MapPage';
import ProfilePage from '../screens/ProfilePage';
import SettingPage from '../screens/SettingPage';
import SettingsAbout from '../screens/SettingsAbout';
import SettingsHelp from '../screens/SettingsHelp';
import SettingsPrivacy from '../screens/SettingsPrivacy';
import { WHITE } from '../constants/Colors';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import AchievementsScreen from '../screens/AchievementsScreen';
import AirQualityScreen from '../screens/AirQualityScreen';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string; size?: number }) {
  return (
    <FontAwesome
      size={props.size ? props.size : 30}
      style={{ marginBottom: -3 }}
      name={props.name}
      color={props.color}
    />
  );
}

function createTabBarIcon(name: string, color: string, size?: number) {
  return <TabBarIcon name={name} color={color} size={size} />;
}

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: WHITE,
        style: { minHeight: 55 },
        labelStyle: { marginBottom: 3 },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => createTabBarIcon('home', color),
          tabBarLabel: 'Hjem',
        }}
      />

      <BottomTab.Screen
        name="Map"
        component={MapNavigator}
        options={{
          tabBarIcon: ({ color }) => createTabBarIcon('map', color, 22),
          tabBarLabel: 'Kart',
        }}
      />

      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => createTabBarIcon('user', color),
          tabBarLabel: 'Profil',
        }}
      />

      <BottomTab.Screen
        name="Competition"
        component={CompetitionNavigator}
        options={{
          tabBarIcon: ({ color }) => createTabBarIcon('trophy', color),
          tabBarLabel: 'Konkurranse',
        }}
      />
    </BottomTab.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

export function HomeNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <HomeStack.Screen
        name="LandingPage"
        component={LandingPage}
        options={{ title: 'Hjem' }}
      />
      <HomeStack.Screen
        name="WeatherScreen"
        component={WeatherScreen}
        options={{ title: 'Vær' }}
      />
      <HomeStack.Screen
        name="AirQualityScreen"
        component={AirQualityScreen}
        options={{ title: 'Luftkvalitet' }}
      />
    </HomeStack.Navigator>
  );
}

const MapStack = createStackNavigator<MapParamList>();

function MapNavigator() {
  return (
    <MapStack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <MapStack.Screen
        name="MapPage"
        component={MapPage}
        options={{ title: 'Kart' }}
      />
    </MapStack.Navigator>
  );
}

const CompetitionStack = createStackNavigator<CompetitionParamList>();

function CompetitionNavigator() {
  return (
    <CompetitionStack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <CompetitionStack.Screen
        name="CompetitionPage"
        component={CompetitionPage}
        options={{ title: 'Konkurranse' }}
      />
      <CompetitionStack.Screen
        name="LeaderboardScreen"
        component={LeaderboardScreen}
        options={{ title: 'Toppliste' }}
      />
      <CompetitionStack.Screen
        name="AchievementsScreen"
        component={AchievementsScreen}
        options={{ title: 'Bragder' }}
      />
    </CompetitionStack.Navigator>
  );
}

const ProfileStack = createStackNavigator<ProfileParamList>();

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <ProfileStack.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{ title: 'Profil' }}
      />
      <ProfileStack.Screen
        name="SettingPage"
        component={SettingPage}
        options={{ title: 'Innstillinger' }}
      />
      <ProfileStack.Screen
        name="SettingsAbout"
        component={SettingsAbout}
        options={{ title: 'About' }}
      />
      <ProfileStack.Screen
        name="SettingsHelp"
        component={SettingsHelp}
        options={{ title: 'Ofte stilte spørsmål' }}
      />
      <ProfileStack.Screen
        name="SettingsPrivacy"
        component={SettingsPrivacy}
        options={{ title: 'Personvern' }}
      />
    </ProfileStack.Navigator>
  );
}

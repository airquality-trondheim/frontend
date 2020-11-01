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
import SettingsFavoriteArea from '../screens/SettingsFavoriteArea';
import SettingsHelp from '../screens/SettingsHelp';
import SettingsPrivacy from '../screens/SettingsPrivacy';
import { TINTCOLOR } from '../constants/Colors';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import AchievementsScreen from '../screens/AchievementsScreen';

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
        activeTintColor: TINTCOLOR,
        showLabel: false,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => createTabBarIcon('home', color),
        }}
      />

      <BottomTab.Screen
        name="Map"
        component={MapNavigator}
        options={{
          tabBarIcon: ({ color }) => createTabBarIcon('map', color, 22),
        }}
      />

      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => createTabBarIcon('user', color),
        }}
      />

      <BottomTab.Screen
        name="Competition"
        component={CompetitionNavigator}
        options={{
          tabBarIcon: ({ color }) => createTabBarIcon('trophy', color),
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
      <HomeStack.Screen name="WeatherScreen" component={WeatherScreen} />
    </HomeStack.Navigator>
  );
}

const MapStack = createStackNavigator<MapParamList>();

function MapNavigator() {
  return (
    <MapStack.Navigator>
      <MapStack.Screen name="MapPage" component={MapPage} />
    </MapStack.Navigator>
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
      <CompetitionStack.Screen
        name="LeaderboardScreen"
        component={LeaderboardScreen}
      />
      <CompetitionStack.Screen
        name="AchievementsScreen"
        component={AchievementsScreen}
      />
    </CompetitionStack.Navigator>
  );
}

const ProfileStack = createStackNavigator<ProfileParamList>();

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="ProfilePage" component={ProfilePage} />
      <ProfileStack.Screen name="SettingPage" component={SettingPage} />
      <ProfileStack.Screen
        name="SettingsFavoriteArea"
        component={SettingsFavoriteArea}
      />
      <ProfileStack.Screen name="SettingsHelp" component={SettingsHelp} />
      <ProfileStack.Screen name="SettingsPrivacy" component={SettingsPrivacy} />
    </ProfileStack.Navigator>
  );
}

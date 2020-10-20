import {
  AirqualityData,
  AchievementCardElement,
  aqStationData,
  LeaderboardElement,
  UserRanking,
  WeatherElement,
} from '../types/_types';

export type RootAction =
  | WeatherActionTypes
  | LeaderboardActionTypes
  | MapActionTypes
  | AchievementCardActionTypes
  | AirqualityActionTypes;

// Airquality
export const GET_AIRQUALITYFORSTATION = 'GET_AIRQUALITYFORSTATION';

type GetAirqualityForStationAction = {
  type: typeof GET_AIRQUALITYFORSTATION;
  data: AirqualityData;
};

export type AirqualityActionTypes = GetAirqualityForStationAction;

//Achievements

export const GET_ACHIEVEMENTCARD = 'GET_ACHIEVEMENT';

type GetAchievementCardAction = {
  type: typeof GET_ACHIEVEMENTCARD;
  data: AchievementCardElement[];
};

export type AchievementCardActionTypes = GetAchievementCardAction;

// Weather
export const GET_WEATHER = 'GET_WEATHER';

type GetWeatherAction = {
  type: typeof GET_WEATHER;
  today: WeatherElement[];
  tomorrow: WeatherElement[];
  lastFetched: Date;
};

export type WeatherActionTypes = GetWeatherAction;

// Leaderboard
export const GET_LEADERBOARD = 'GET_LEADERBOARD';
export const GET_USERRANKING = 'GET_USERRANKING';

type GetLeaderboardAction = {
  type: typeof GET_LEADERBOARD;
  data: LeaderboardElement[];
};

export type LeaderboardActionTypes =
  | GetLeaderboardAction
  | GetUserRankingAction;

type GetUserRankingAction = {
  type: typeof GET_USERRANKING;
  userRanking: UserRanking;
};

// Map
export const GET_AIR_QUALITY_DATA = 'GET_AIR_QUALITY_DATA';

type GetAirQualityDataAction = {
  type: typeof GET_AIR_QUALITY_DATA;
  data: aqStationData[];
};

export type MapActionTypes = GetAirQualityDataAction;

import {
  aqStationData,
  LeaderboardElement,
  UserRanking,
  WeatherElement,
} from '../types/_types';

export type RootAction =
  | WeatherActionTypes
  | LeaderboardActionTypes
  | MapActionTypes;

export const GET_WEATHER = 'GET_WEATHER';

type GetWeatherAction = {
  type: typeof GET_WEATHER;
  data: WeatherElement[];
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

// Map
export const GET_AIR_QUALITY_DATA = 'GET_AIR_QUALITY_DATA';

type GetAirQualityDataAction = {
  type: typeof GET_AIR_QUALITY_DATA;
  data: aqStationData[];
};

export type MapActionTypes = GetAirQualityDataAction;
type GetUserRankingAction = {
  type: typeof GET_USERRANKING;
  userRanking: UserRanking;
};

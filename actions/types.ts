import { aqStationData, LeaderboardElement } from '../types/_types';

export type RootAction = LeaderboardActionTypes;

export const GET_LEADERBOARD = 'GET_LEADERBOARD';

type GetLeaderboardAction = {
  type: typeof GET_LEADERBOARD;
  data: LeaderboardElement[];
};

export type LeaderboardActionTypes = GetLeaderboardAction;

// Map
export const GET_AIR_QUALITY_DATA = 'GET_AIR_QUALITY_DATA';

type GetAirQualityDataAction = {
  type: typeof GET_AIR_QUALITY_DATA;
  data: aqStationData[];
};

export type MapActionTypes = GetAirQualityDataAction;

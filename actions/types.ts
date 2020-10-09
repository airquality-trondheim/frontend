import {
  aqStationData,
  LeaderboardElement,
  UserRanking,
} from '../types/_types';

export type RootAction = LeaderboardActionTypes | PointsActionTypes;

// Leaderboard
export const GET_LEADERBOARD = 'GET_LEADERBOARD';
export const GET_USERRANKING = 'GET_USERRANKING';

type GetLeaderboardAction = {
  type: typeof GET_LEADERBOARD;
  data: LeaderboardElement[];
};

type GetUserRankingAction = {
  type: typeof GET_USERRANKING;
  userRanking: UserRanking;
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

// Points
export const GET_USERPOINTS = 'GET_USERPOINTS';

type GetUserPointsAction = {
  type: typeof GET_USERPOINTS;
  points: number;
};

export type PointsActionTypes = GetUserPointsAction;

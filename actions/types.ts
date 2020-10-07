import { WeatherElement } from '../types/_types';

export type RootAction = WeatherActionTypes | LeaderboardActionTypes;

export const GET_WEATHER = 'GET_WEATHER';

type GetWeatherAction = {
  type: typeof GET_WEATHER;
  data: WeatherElement[];
  lastFetched: Date;
};

export type WeatherActionTypes = GetWeatherAction;
import { LeaderboardElement, UserRanking } from '../types/_types';

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

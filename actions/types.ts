import { LeaderboardElement, UserRanking } from '../types/_types';

export type RootAction = LeaderboardActionTypes;

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

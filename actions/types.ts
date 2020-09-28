import { LeaderboardElement } from '../types/_types';

export type RootAction = LeaderboardActionTypes;

export const GET_LEADERBOARD = 'GET_LEADERBOARD';

type GetLeaderboardAction = {
  type: typeof GET_LEADERBOARD;
  data: LeaderboardElement[];
};

export type LeaderboardActionTypes = GetLeaderboardAction;

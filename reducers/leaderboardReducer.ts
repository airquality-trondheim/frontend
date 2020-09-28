import { GET_LEADERBOARD, LeaderboardActionTypes } from '../actions/types';
import { LeaderboardData } from '../types/_types';

const initialState: LeaderboardData = {
  data: [],
};

export default function (
  state = initialState,
  action: LeaderboardActionTypes,
): LeaderboardData {
  switch (action.type) {
    case GET_LEADERBOARD:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
}

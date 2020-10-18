import {
  GET_LEADERBOARD,
  GET_USERRANKING,
  LeaderboardActionTypes,
} from '../actions/types';
import { LeaderboardState } from '../types/_types';

const initialState: LeaderboardState = {
  data: [],
  userRanking: { ranking: 0, user: { id: '0', username: '0', points: 0 } },
};

export default function (
  state = initialState,
  action: LeaderboardActionTypes,
): LeaderboardState {
  switch (action.type) {
    case GET_LEADERBOARD:
      return {
        ...state,
        data: action.data,
      };
    case GET_USERRANKING:
      return {
        ...state,
        userRanking: action.userRanking,
      };
    default:
      return state;
  }
}

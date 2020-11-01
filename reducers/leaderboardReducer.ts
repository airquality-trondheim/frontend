import {
  GET_LEADERBOARD,
  GET_LOCALLEADERBOARD,
  GET_USERRANKING,
  LeaderboardActionTypes,
} from '../actions/types';
import { LeaderboardState } from '../types/_types';

const initialState: LeaderboardState = {
  data: [],
  localData: [],
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
    case GET_LOCALLEADERBOARD:
      return {
        ...state,
        localData: action.data,
      }
    default:
      return state;
  }
}

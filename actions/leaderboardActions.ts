import { Dispatch } from 'redux';
import store from '../store';
import { GET_LEADERBOARD, RootAction } from './types';

// TODO: Uncomment and fix code below
export function getLeaderboardData(dispatch: Dispatch<RootAction>) {
  var data = [...store.getState().leaderboard.data];
  if (data.length > 0) {
    // data has already been fetched
    return;
  }
  return dispatch({
    type: GET_LEADERBOARD,
    data: [
      { username: 'Joe', points: 52 },
      { username: 'Snake', points: 150 },
      { username: 'Jenny', points: 120 },
    ],
  });
  /*
  fetchLeaderboardData().then((response, reject) => {
    data = response.data.data; //??
    dispatch({
      type: GET_LEADERBOARD,
      data: data,
    });
  });
  */
}

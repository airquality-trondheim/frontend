import { Dispatch } from 'redux';
import {
  fetchLeaderboardData,
  fetchLocalUserRanking,
  fetchUserRanking,
} from '../queries/leaderboard';
import store from '../store';
import {
  GET_LEADERBOARD,
  GET_LOCALLEADERBOARD,
  GET_LOCALUSERRANKING,
  GET_USERRANKING,
  RootAction,
} from './types';

export async function getLeaderboardData(dispatch: Dispatch<RootAction>) {
  const data = [...store.getState().leaderboard.data];
  if (data.length > 0) {
    // data has already been fetched
    return;
  }
  const userRanking = store.getState().leaderboard.userRanking;
  const newData = await fetchLeaderboardData();
  var i = 1;
  for (const user of newData) {
    if (user.id === userRanking.user.id && i !== userRanking.rank) {
      dispatch({
        type: GET_USERRANKING,
        userRanking: { rank: i, user: user },
      });
      break;
    }
    i += 1;
  }
  dispatch({
    type: GET_LEADERBOARD,
    data: newData,
  });
}

export async function getUserRanking(
  userID: string,
  dispatch: Dispatch<RootAction>,
) {
  const newUserRanking = await fetchUserRanking(userID);
  dispatch({
    type: GET_USERRANKING,
    userRanking: newUserRanking,
  });
}

export async function getLocalLeaderboardData(
  area: string,
  dispatch: Dispatch<RootAction>,
) {
  const userRanking = store.getState().leaderboard.userRanking;
  const newData = await fetchLeaderboardData(area);
  var i = 1;
  for (const user of newData) {
    if (user.id === userRanking.user.id && i !== userRanking.rank) {
      dispatch({
        type: GET_LOCALUSERRANKING,
        localUserRanking: { rank: i, user: user },
      });
      break;
    }
    i += 1;
  }
  dispatch({
    type: GET_LOCALLEADERBOARD,
    localData: newData,
  });
}

export async function getLocalUserRanking(
  userID: string,
  area: string,
  dispatch: Dispatch<RootAction>,
) {
  const newUserRanking = await fetchLocalUserRanking(userID, area);
  dispatch({
    type: GET_LOCALUSERRANKING,
    localUserRanking: newUserRanking,
  });
}

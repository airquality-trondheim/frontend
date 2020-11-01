import { Dispatch } from 'redux';
import { fetchLeaderboardData, fetchUserRanking } from '../queries/leaderboard';
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
    if (user.id === userRanking.user.id && i !== userRanking.ranking) {
      dispatch({
        type: GET_USERRANKING,
        userRanking: { ranking: i, user: user },
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
  const data = [...store.getState().leaderboard.localData];
  if (data.length > 0) {
    // data has already been fetched
    return;
  }
  const userRanking = store.getState().leaderboard.userRanking;
  const newData = await fetchLeaderboardData(area);
  var i = 1;
  for (const user of newData) {
    if (user.id === userRanking.user.id && i !== userRanking.ranking) {
      dispatch({
        type: GET_USERRANKING,
        userRanking: { ranking: i, user: user },
      });
      break;
    }
    i += 1;
  }
  dispatch({
    type: GET_LOCALLEADERBOARD,
    data: newData,
  });
}

export async function getLocalUserRanking(
  userID: string,
  area: string,
  dispatch: Dispatch<RootAction>,
) {
  const newUserRanking = await fetchUserRanking(userID, area);
  dispatch({
    type: GET_LOCALUSERRANKING,
    userRanking: newUserRanking,
  });
}

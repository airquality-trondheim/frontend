import { Dispatch } from 'redux';
import { fetchUserPoints } from '../queries/points';
import { GET_USERPOINTS, RootAction } from './types';

export async function getUserPoints(
  userID: string,
  dispatch: Dispatch<RootAction>,
) {
  const newPoints = await fetchUserPoints(userID);
  if (newPoints === undefined) {
    dispatch({
      type: GET_USERPOINTS,
      points: -1,
    });
    return;
  }
  dispatch({
    type: GET_USERPOINTS,
    points: newPoints,
  });
}

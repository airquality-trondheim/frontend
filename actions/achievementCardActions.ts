import { Dispatch } from 'redux';
import store from '../store';
import { GET_ACHIEVEMENTCARD, RootAction } from './types';
import { achievements } from '../constants/Achievements';

export function getAchievementCardData(dispatch: Dispatch<RootAction>) {
  achievements.sort((a, b) => {
    return a.Date > b.Date ? -1 : 1;
  });

  dispatch({
    type: GET_ACHIEVEMENTCARD,
    data: achievements,
  });
}

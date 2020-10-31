import { Dispatch } from 'redux';
import { GET_ACHIEVEMENTCARD, RootAction } from './types';
// import { achievements } from '../constants/Achievements';
import { fetchAchievements } from '../queries/achievements';

export async function getAchievementCardData(dispatch: Dispatch<RootAction>) {

  const achievements = await fetchAchievements();

  if (achievements === undefined) {
    dispatch({
      type: GET_ACHIEVEMENTCARD,
      data: [],
    });
    return;
  }

  achievements.sort((a, b) => {
    return a.Date > b.Date ? -1 : 1;
  });

  dispatch({
    type: GET_ACHIEVEMENTCARD,
    data: achievements,
  });
}

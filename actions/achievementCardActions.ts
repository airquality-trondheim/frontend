import { Dispatch } from 'redux';
import { GET_ACHIEVEMENTCARD, RootAction } from './types';
import { fetchAchievements } from '../queries/achievements';

export async function getAchievementCardData(dispatch: Dispatch<RootAction>) {

  const response = await fetchAchievements();

  if (response === undefined) {
    dispatch({
      type: GET_ACHIEVEMENTCARD,
      data: [],
      achieved: [],
    });
    return;
  }

  response.achievements.forEach(
    achievement => {
      achievement.date = response.achieved.find(
        element => element.achievementId == achievement.achievementId
      )?.timestampEarned 
    }
  );

  response.achievements.sort((a, b) => {
    return (
      a.date === undefined ? 1 :  
      b.date === undefined ? -1 : 
      a.date > b.date ? -1 : 1
      );
  });

  dispatch({
    type: GET_ACHIEVEMENTCARD,
    data: response.achievements,
    achieved: response.achieved,
  });
}

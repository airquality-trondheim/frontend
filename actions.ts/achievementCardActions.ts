import { Dispatch } from 'redux';
import store from '../store';
import { GET_ACHIEVEMENTCARD, RootAction } from './types';

export function getAchievementCardData(dispatch: Dispatch<RootAction>) {
  var data = [...store.getState().achievementcard.data];
  if (data.length > 0) {
    // data has already been fetched
    return;
  }
  return dispatch({
    type: GET_ACHIEVEMENTCARD,
    data: [
      {
        achievementSymbol: 0x1f648,
        achievementName: 'supert!',
        achievementDescription: 'Du er flink!',
        achievementGroup: '2',
      },
      {
        achievementSymbol: 0x1f649,
        achievementName: 'enda bedre!',
        achievementDescription: 'Du er flink!',
        achievementGroup: '1',
      },
      {
        achievementSymbol: 0x1f64a,
        achievementName: 'sykt!',
        achievementDescription: 'Du er flink!',
        achievementGroup: '3',
      },
      {
        achievementSymbol: 0x1f921,
        achievementName: 'løpe!',
        achievementDescription: 'Du er flink!',
        achievementGroup: '1',
      },
      {
        achievementSymbol: 0x1f479,
        achievementName: 'sykle!',
        achievementDescription: 'Du er flink!',
        achievementGroup: '2',
      },
      {
        achievementSymbol: 0x1f47a,
        achievementName: 'ikke kjøre!',
        achievementDescription: 'Du er flink!',
        achievementGroup: '1',
      },
      {
        achievementSymbol: 0x1f47b,
        achievementName: 'danse?',
        achievementDescription: 'Du er flink!',
        achievementGroup: '1',
      },
      {
        achievementSymbol: 0x1f47c,
        achievementName: 'varig insats!',
        achievementDescription: 'Du er flink!',
        achievementGroup: '2',
      },
      {
        achievementSymbol: 0x1f47d,
        achievementName: 'sunn!',
        achievementDescription: 'Du er flink!',
        achievementGroup: '2',
      },
      {
        achievementSymbol: 0x1f47e,
        achievementName: 'næmmen!',
        achievementDescription: 'Du er flink!',
        achievementGroup: '1',
      },
      {
        achievementSymbol: 0x1f480,
        achievementName: 'fortsatt!',
        achievementDescription: 'Du er flink!',
        achievementGroup: '3',
      },
    ],
  });
}

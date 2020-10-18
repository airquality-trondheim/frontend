import { Dispatch } from 'redux';
import store from '../store';
import { GET_ACHIEVEMENTCARD, RootAction } from './types';

export function getAchievementCardData(dispatch: Dispatch<RootAction>) {
  //   var data = [...store.getState().achievementcard.data];
  //   if (data.length > 0) {
  //     // data has already been fetched
  //     return;
  //   }

  let data = [
    {
      achievementSymbol: 0x1f648,
      achievementName: 'supert!',
      achievementDescription: 'Du er flink!',
      achievementGroup: 'Gruppe 2 - Trygge Soner',
      Date: new Date('August 18, 2020 20:10:30'),
    },
    {
      achievementSymbol: 0x1f649,
      achievementName: 'enda bedre!',
      achievementDescription: 'Du er flink!',
      achievementGroup: 'Gruppe 1 - Gå til Jobb',
      Date: new Date('August 19, 2020 23:15:30'),
    },
    {
      achievementSymbol: 0x1f64a,
      achievementName: 'sykt!',
      achievementDescription: 'Du er flink!',
      achievementGroup: 'Gruppe 3 - Varig Insats',
      Date: new Date('August 18, 2020 23:17:30'),
    },
    {
      achievementSymbol: 0x1f921,
      achievementName: 'løpe!',
      achievementDescription: 'Du er flink!',
      achievementGroup: 'Gruppe 1 - Gå til Jobb',
      Date: new Date('August 18, 2020 21:32:30'),
    },
    {
      achievementSymbol: 0x1f479,
      achievementName: 'sykle!',
      achievementDescription: 'Du er flink!',
      achievementGroup: 'Gruppe 2 - Trygge Soner',
      Date: new Date('August 19, 2020 20:19:30'),
    },
    {
      achievementSymbol: 0x1f47a,
      achievementName: 'ikke kjøre!',
      achievementDescription: 'Du er flink!',
      achievementGroup: 'Gruppe 1 - Gå til Jobb',
      Date: new Date('August 18, 2020 21:18:30'),
    },
    {
      achievementSymbol: 0x1f47b,
      achievementName: 'danse?',
      achievementDescription: 'Du er flink!',
      achievementGroup: 'Gruppe 1 - Gå til Jobb',
      Date: new Date('August 20, 2020 19:35:30'),
    },
    {
      achievementSymbol: 0x1f47c,
      achievementName: 'varig insats!',
      achievementDescription: 'Du er flink!',
      achievementGroup: 'Gruppe 2 - Trygge Soner',
      Date: new Date('August 19, 2020 21:56:30'),
    },
    {
      achievementSymbol: 0x1f47d,
      achievementName: 'sunn!',
      achievementDescription: 'Du er flink!',
      achievementGroup: 'Gruppe 2 - Trygge Soner',
      Date: new Date('August 20, 2020 22:56:30'),
    },
    {
      achievementSymbol: 0x1f47e,
      achievementName: 'næmmen!',
      achievementDescription: 'Du er flink!',
      achievementGroup: 'Gruppe 1 - Gå til Jobb',
      Date: new Date('August 20, 2020 12:25:30'),
    },
    {
      achievementSymbol: 0x1f480,
      achievementName: 'fortsatt!',
      achievementDescription: 'Du er flink!',
      achievementGroup: 'Gruppe 3 - Varig Insats',
      Date: new Date('August 19, 2020 21:12:30'),
    },
  ].sort((a, b) => {
    return a.Date > b.Date ? -1 : 1;
  });

  dispatch({
    type: GET_ACHIEVEMENTCARD,
    data: data,
  });
}

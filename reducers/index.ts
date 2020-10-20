import { combineReducers } from 'redux';
import achievementCardReducer from './achievemetCardReducer';

import weatherReducer from './weatherReducer';
import leaderboardReducer from './leaderboardReducer';
import mapReducer from './mapReducer';
import pointsReducer from './pointsReducer';

export const rootReducer = combineReducers({
  leaderboard: leaderboardReducer,
  weather: weatherReducer,
  map: mapReducer,
  points: pointsReducer,
  achievementcard: achievementCardReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

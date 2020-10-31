import { combineReducers } from 'redux';
import achievementCardReducer from './achievementCardReducer';

import weatherReducer from './weatherReducer';
import leaderboardReducer from './leaderboardReducer';
import mapReducer from './mapReducer';
import pointsReducer from './pointsReducer';
import airqualityReducer from './airqualityReducer';

export const rootReducer = combineReducers({
  leaderboard: leaderboardReducer,
  weather: weatherReducer,
  map: mapReducer,
  points: pointsReducer,
  airquality: airqualityReducer,
  achievementcard: achievementCardReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

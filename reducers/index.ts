import { combineReducers } from 'redux';
import achievementCardReducer from './achievemetCardReducer';

import weatherReducer from './weatherReducer';
import leaderboardReducer from './leaderboardReducer';
import mapReducer from './mapReducer';
import airqualityReducer from './airqualityReducer';

export const rootReducer = combineReducers({
  leaderboard: leaderboardReducer,
  weather: weatherReducer,
  map: mapReducer,
  airquality: airqualityReducer,
  achievementcard: achievementCardReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

import { combineReducers } from 'redux';

import weatherReducer from './weatherReducer';
import leaderboardReducer from './leaderboardReducer';
import mapReducer from './mapReducer';
import airqualityReducer from './airqualityReducer';

export const rootReducer = combineReducers({
  // reducerName: reducerImported
  leaderboard: leaderboardReducer,
  weather: weatherReducer,
  map: mapReducer,
  airquality: airqualityReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

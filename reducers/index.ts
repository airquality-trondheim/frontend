import { combineReducers } from 'redux';

import weatherReducer from './weatherReducer';
import leaderboardReducer from './leaderboardReducer';
import mapReducer from './mapReducer';
import pointsReducer from './pointsReducer';

export const rootReducer = combineReducers({
  // reducerName: reducerImported
  leaderboard: leaderboardReducer,
  weather: weatherReducer,
  map: mapReducer,
  points: pointsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

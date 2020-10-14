import { combineReducers } from 'redux';

import weatherReducer from './weatherReducer';
import leaderboardReducer from './leaderboardReducer';
import mapReducer from './mapReducer';

export const rootReducer = combineReducers({
  // reducerName: reducerImported
  leaderboard: leaderboardReducer,
  weather: weatherReducer,
  map: mapReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

import { combineReducers } from 'redux';

import weatherReducer from './weatherReducer';
import leaderboardReducer from './leaderboardReducer';

export const rootReducer = combineReducers({
  // reducerName: reducerImported
  leaderboard: leaderboardReducer,
  weather: weatherReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

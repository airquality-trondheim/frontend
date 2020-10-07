import { combineReducers } from 'redux';

import leaderboardReducer from './leaderboardReducer';
import mapReducer from './mapReducer';

export const rootReducer = combineReducers({
  // reducerName: reducerImported
  leaderboard: leaderboardReducer,
  map: mapReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

import { combineReducers } from 'redux';

import leaderboardReducer from './leaderboardReducer';
import mapReducer from './mapReducer';
import pointsReducer from './pointsReducer';

export const rootReducer = combineReducers({
  // reducerName: reducerImported
  leaderboard: leaderboardReducer,
  map: mapReducer,
  points: pointsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

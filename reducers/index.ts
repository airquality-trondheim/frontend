import { combineReducers } from 'redux';

import leaderboardReducer from './leaderboardReducer';

export const rootReducer = combineReducers({
  // reducerName: reducerImported
  leaderboard: leaderboardReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

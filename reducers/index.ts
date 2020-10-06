import { combineReducers } from 'redux';
import achievementCardReducer from './achievemetCardReducer';

//import leaderboardReducer from './leaderboardReducer';

export const rootReducer = combineReducers({
  // reducerName: reducerImported
  //leaderboard: leaderboardReducer,
  achievementcard: achievementCardReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

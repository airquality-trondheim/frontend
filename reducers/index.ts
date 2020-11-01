import { combineReducers } from 'redux';
import achievementCardReducer from './achievementCardReducer';

import weatherReducer from './weatherReducer';
import leaderboardReducer from './leaderboardReducer';
import mapReducer from './mapReducer';
import userprofileReducer from './profileReducer';
import pointsReducer from './pointsReducer';
import airqualityReducer from './airqualityReducer';
import locationReducer from './locationReducer';

export const rootReducer = combineReducers({
  leaderboard: leaderboardReducer,
  weather: weatherReducer,
  map: mapReducer,
  points: pointsReducer,
  airquality: airqualityReducer,
  achievementcard: achievementCardReducer,
  userprofile: userprofileReducer,
  locations: locationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

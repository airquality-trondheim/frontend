import { combineReducers } from 'redux';

import weatherReducer from './weatherReducer';

export const rootReducer = combineReducers({
  // reducerName: reducerImported
  weather: weatherReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

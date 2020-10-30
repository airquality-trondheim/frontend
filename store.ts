import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';

const initialState = {};

export const middelware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middelware)),
);

export default store;

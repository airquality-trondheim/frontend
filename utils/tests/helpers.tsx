import React, { ReactElement } from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { rootReducer } from '../../reducers';
import { applyMiddleware, compose, createStore } from 'redux';
import { middelware } from '../../store';
import { AppState } from '../../types/_types';

export const createInitialiasedStore = (initialState?: AppState) =>
  createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middelware)),
  );

export const renderPage = (page: ReactElement, initialState?: AppState) => {
  const store = createInitialiasedStore(initialState);

  const pageContainerComponent = <Provider store={store}>{page}</Provider>;

  return render(pageContainerComponent);
};

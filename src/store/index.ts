import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';

import { articlesSlice, fetchArticlesSaga } from './articles';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: combineReducers({
    articles: articlesSlice.reducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(sagaMiddleware),
});

sagaMiddleware.run(function* saga() {
  yield all([
    fetchArticlesSaga(),
  ]);
});

export * from './types';

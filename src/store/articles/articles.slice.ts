import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Status } from '../types';

interface Article {
  id: string;
  title: string;
  createdAt: string;
  text: string;
  author: string;
}

export interface ArticlesState {
  entities: Article[];
  status: Status;
}

const initialState: ArticlesState = {
  entities: [],
  status: Status.Idle,
};

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    requestedArticles: (state) => {
      state.status = Status.Loading;
    },
    rejectedArticlesRequest: (state) => {
      state.status = Status.Error;
    },
    fulfilledArticlesRequest: (state, action: PayloadAction<Article[]>) => {
      state.status = Status.Success;
      state.entities = action.payload;
    },
  },
});

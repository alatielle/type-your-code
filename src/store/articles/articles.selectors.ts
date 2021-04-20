import { AppState } from "../types";

export const selectArticles = (state: AppState) => state.articles.entities;

export const selectStatus = (state: AppState) => state.articles.status;

export const selectArticle = (state: AppState) => (id: string) =>
  state.articles.entities.find((article) => article.id === id);

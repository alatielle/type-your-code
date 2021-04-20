import { call, put, takeLatest } from "redux-saga/effects";

import { fetchArticles, Article } from "../../api";
import {
  fulfilledArticlesRequest,
  rejectedArticlesRequest,
  requestedArticles,
} from "./articles.actions";

export function* fetchArticlesSaga() {
  yield takeLatest(requestedArticles, function* worker() {
    try {
      const data: Article[] = yield call(fetchArticles);
      yield put(
        fulfilledArticlesRequest(data)
      );
    } catch (e) {
      yield put(rejectedArticlesRequest());
    }
  });
}

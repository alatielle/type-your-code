import React, {useEffect} from "react";
import {Link, Route, Switch, useRouteMatch} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {Article} from "./Article";
import {requestedArticles, selectArticles, selectStatus,} from "../store/articles";
import {Status} from "../store";

export const Articles = () => {
  const match = useRouteMatch();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestedArticles());
  }, [dispatch]);

  const articles = useSelector(selectArticles);
  const status = useSelector(selectStatus);

  return (
    <div>
      <h1>Articles</h1>
      {status === Status.Loading && 'Just a moment...'}
      {status === Status.Error && 'Oops!'}
      {status === Status.Success && (
        <nav>
          <ul>
            {articles.map(article => (
              <li>
                <Link to={`${match.url}/${article.id}`}>{article.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
      <Switch>
        <Route path={`${match.path}/:id`}>
          <Article />
        </Route>
        <Route>
          <p>Enjoy our finest articles selection</p>
        </Route>
      </Switch>
    </div>
  );
};

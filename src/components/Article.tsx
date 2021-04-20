import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectArticle } from "../store/articles";

interface ArticleParams {
  id: string;
}

export const Article = () => {
  const { id } = useParams<ArticleParams>();
  const article = useSelector(selectArticle)(id);

  if (!article) {
    return <p>Article not found</p>;
  }

  return (
    <article>
      <h2>{article.title}</h2>
      <div className="Article-author">
        {'Written by '}
        <b>{article.author}</b>
      </div>
      <time>{(new Date(article.createdAt)).toLocaleDateString()}</time>
      <p>{article.text}</p>
    </article>
  );
};

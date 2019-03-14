import React from "react";

const ArticlePreview = ({ title, author, body, selectArticle }) => (
  <div className="article articlePreview" onClick={selectArticle}>
    <div className="articleHeader">
      <h2 className="articleTitle">{title}</h2>
      <h5 className="articleAuthor">by {author}</h5>
    </div>
    <div className="articlePreview">
      <p>{body}</p>
    </div>
  </div>
);

export default ArticlePreview;

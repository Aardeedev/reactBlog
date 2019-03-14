import React, { Component } from "react";

const SingleArticleDisplay = props => (
  <div>
    <div className="article" onClick={selectArticle}>
      <div className="articleHeader">
        <h2 className="articleTitle">{title}</h2>
        <h5 className="articleAuthor">by {author}</h5>
      </div>
      <div className="articlePreview">
        <p>{body}</p>
      </div>
    </div>
  </div>
);

export default SingleArticleDisplay;

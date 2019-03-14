import React, { Component } from "react";
import comments from "../data/comments";

const Comment = props => {
  return (
    <div className="Comment">
      {comments
        //filter through all of the comments and return an array of only comments relating to the selected article (props.selectedArticle)
        .filter(obj => obj.postId === props.selectedArticle)
        //map over each object in the 'new' array and populate a JSX return
        .map(({ name, email, body, postId }) => (
          <>
            <p>{name}</p>
            <p>{email}</p>
            <p>{body}</p>
            <p>{postId}</p>
          </>
        ))}
    </div>
  );
};

export default Comment;

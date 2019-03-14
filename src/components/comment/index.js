import React, { Component } from "react";

const Comment = ({ comments, selectedArticle }) => {
  return (
    <div className="Comment">
      {comments
        //filter through all of the comments and return an array of only comments relating to the selected article (props.selectedArticle)
        .filter(obj => obj.postId === selectedArticle)
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

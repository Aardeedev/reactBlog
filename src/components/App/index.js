import React, { Component, Fragment } from "react";
import "./App.css";
import ArticlePreview from "../articlePreview";
import posts from "../data/post";
import users from "../data/users";
import Comment from "../comment";

fetch("https://jsonplaceholder.typicode.com/comments").then(fetched =>
  fetched.json()
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedArticle: null,
      articleObj: null,
      displaySelection: 0,
      comments: [],
      posts: [],
      users: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => this.setState({ posts: data }));
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(response => response.json())
      .then(data => this.setState({ comments: data }));
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => this.setState({ users: data }));
  }

  selectArticle = id => {
    this.setState({
      selectedArticle: id,
      articleObj: this.state.posts.find(post => post.id === id)
    });
  };

  userName = id => this.state.users.find(user => user.id === id).name;

  nextSix = change => {
    if (
      this.state.displaySelection < 6 ||
      this.state.displaySelection + 6 > posts.length
    ) {
      return;
    }
    this.setState(state => ({
      displaySelection: state.displaySelection + change
    }));
  };

  render() {
    let { posts, users, comments } = this.state;
    let fetchComplete = posts[0] && users[0] && comments[0];
    return (
      <div id="appContainer">
        <h1>The super duper nonsense blog</h1>

        {!this.state.selectedArticle && fetchComplete && (
          <div className="previewGrid">
            {this.state.posts
              .slice(
                this.state.displaySelection,
                this.state.displaySelection + 6
              )
              .map(post => (
                <ArticlePreview
                  title={post.title}
                  author={this.userName(post.userId)}
                  body={post.body}
                  selectArticle={() => this.selectArticle(post.id)}
                />
              ))}
          </div>
        )}

        {this.state.selectedArticle && (
          <>
            <ArticlePreview
              title={this.state.articleObj.title}
              author={this.userName(this.state.articleObj.userId)}
              body={this.state.articleObj.body}
              selectArticle={() => this.selectArticle(null)}
            />
            <Comment
              comments={this.state.comments}
              selectedArticle={this.state.selectedArticle}
            />
          </>
        )}
      </div>
    );
  }
}

export default App;

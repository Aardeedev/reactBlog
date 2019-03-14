import React, { Component, Fragment } from "react";
import "./App.css";
import ArticlePreview from "../articlePreview";
import posts from "../data/post";
import users from "../data/users";
import Comment from "../comment";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedArticle: null,
      articleObj: null,
      displaySelection: 0
    };
  }

  selectArticle = id => {
    this.setState({
      selectedArticle: id,
      articleObj: posts.find(post => post.id === id)
    });
  };

  userName = id => users.find(user => user.id === id).name;

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
    return (
      <div id="appContainer">
        <h1>The super duper nonsense blog</h1>

        {!this.state.selectedArticle && (
          <div className="previewGrid">
            {posts
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
            <Comment selectedArticle={this.state.selectedArticle} />
          </>
        )}
      </div>
    );
  }
}

export default App;

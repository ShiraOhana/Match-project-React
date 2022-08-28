import "./App.css";
import Counter from "./Component/Counter";
import Main from "./Component/Main";
import Buttons from "./Component/Buttons";
import React, { Component } from "react";
import { data } from "./data";

class App extends Component {
  state = {
    likeCounter: 0,
    dislikeCounter: 0,
    totalCounter: 0,
  };

  handleClick = (id) => {
    if (id === "like") {
      this.setState((prev) => {
        return {
          likeCounter: prev.likeCounter + 1,
          totalCounter: prev.totalCounter + 1,
        };
      });
    }
    if (id === "dislike") {
      this.setState((prev) => {
        return {
          dislikeCounter: prev.dislikeCounter + 1,
          totalCounter: prev.totalCounter + 1,
        };
      });
    }
  };
  render() {
    return (
      <div className="App">
        {this.state.totalCounter > 4 ? (
          this.state.likeCounter > this.state.dislikeCounter ? (
            <h1 className="endOfQuestions">You Like Europe</h1>
          ) : (
            <h1 className="endOfQuestions">You should visit other places :)</h1>
          )
        ) : (
          <>
            <h1>Do you like Europe?</h1>
            <Counter
              likeCounter={this.state.likeCounter}
              dislikeCounter={this.state.dislikeCounter}
            />
            <Main
              img={data[this.state.totalCounter].img}
              city={data[this.state.totalCounter].city}
            />
            <Buttons handleClick={this.handleClick} />
          </>
        )}
      </div>
    );
  }
}
export default App;

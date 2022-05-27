import "./App.css";
import Counter from "./Component/Counter";
import Main from "./Component/Main";
import Buttons from "./Component/Buttons";
import React, { Component } from "react";
import { data } from "./data";

class App extends Component {
  state = {
    city: data[0].city,
    img: data[0].img,
    likeCounter: 0,
    dislikeCounter: 0,
  };

  handleClick = (id) => {
    if (id === "like") {
      this.setState((prev) => {
        return { likeCounter: prev.likeCounter + 1 };
      });
    }
    if (id === "dislike") {
      this.setState((prev) => {
        return { dislikeCounter: prev.dislikeCounter + 1 };
      });
    }
  };
  render() {
    return (
      <div className="App">
        <h1>Would you visit?</h1>
        <Counter
          likeCounter={this.state.likeCounter}
          dislikeCounter={this.state.dislikeCounter}
        />
        <Main img={this.state.img} city={this.state.city} />
        <Buttons handleClick={this.handleClick} />
      </div>
    );
  }
}
export default App;

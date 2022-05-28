import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    return (
      <div>
        <span className="counter"> Liked: {this.props.likeCounter} </span>
        <span className="counter"> Disliked: {this.props.dislikeCounter} </span>
      </div>
    );
  }
}

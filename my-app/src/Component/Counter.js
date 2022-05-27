import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    return (
      <div>
        <span> {this.props.likeCounter} </span>
        <span> 0 </span>
      </div>
    );
  }
}

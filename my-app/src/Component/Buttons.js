import React, { Component } from "react";

export default class Buttons extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <button
          id="like"
          onClick={(e) => {
            this.props.handleClick(e.target.id);
          }}
        >
          Like
        </button>
        <button
          id="dislike"
          onClick={(e) => {
            this.props.handleClick(e.target.id);
          }}
        >
          Dislike
        </button>
      </div>
    );
  }
}

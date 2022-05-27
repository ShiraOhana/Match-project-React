import React, { Component } from "react";

export default class Buttons extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    function decrementFromCounter() {}
    function addToCounter() {}
  }
  render() {
    return (
      <div>
        {/* <button onClick={(e) => decrementFromCounter(e)}> - </button>
        <button onClick={(e) => addToCounter(e)}> + </button> */}
        <button
          id="like"
          onClick={(e) => {
            this.props.handleClick(e.target.id);
          }}
        >
          Like
        </button>
        <button className="dislike">Dislike</button>
      </div>
    );
  }
}

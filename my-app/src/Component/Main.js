import React, { Component } from "react";

export default class Main extends Component {
  //   componentDidMount() {
  //     this.setState({ city:  }, () => {
  //       //   console.log(this.state.city);
  //     });
  //   }

  render() {
    return (
      <div>
        <img src="#"></img>
        <div>
          <img src={this.props.img}></img> <br></br>
          {this.props.city}
        </div>
      </div>
    );
  }
}

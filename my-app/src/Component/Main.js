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
        <div>
          <img src={this.props.img}></img> <br></br>
          <h3>- {this.props.city} -</h3>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import ChildComp from "./ChildComp";
class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "welcome to React",
    };
  }

  render() {
    return (
      <>
        <div style={{ background: "green" }}>
          <h3>I am Parent Comp</h3>
        </div>
        <ChildComp message={this.state.message}/>
      </>
    );
  }
}

export default ParentComp;

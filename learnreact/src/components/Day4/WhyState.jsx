import React, { Component } from "react";
//Asynchronus  setstate
class WhyState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "codemindUser",
    };
  }


  changeUser(){
    console.log(this.state.username)
   
    this.setState({username:"SevenMindUser"});
    console.log(this.state.username)
}

  render() {

    
    return (
      <>
        <div>Why to use State in React</div>
        <h3>User Name : {this.state.username}</h3>
        <button onClick={this.changeUser.bind(this)}>Change User Name</button>
       
       
      </>
    );
  }
}
export default WhyState;

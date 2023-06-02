import React, { Component } from 'react'


 class EventBindingInnClassComp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       userName:"codeMindUser"
    }
    //binding  event handler in constructor
    this.changeUser=this.changeUser.bind(this)
  }

changeUser=()=>{
  this.setState({
    userName:"sevenMindUser"
  })
}

  render() {
    return (
      <>
      <h1>Event Binding In Class Comp {this.state.userName}</h1>
      <button onClick={this.changeUser}>
        Change User Name
      </button>
      </>
    )
  }
}

export default EventBindingInnClassComp;

//45:41 time zoom
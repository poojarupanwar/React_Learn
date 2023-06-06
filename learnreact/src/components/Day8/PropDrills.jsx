import React, { Component } from 'react'

const MessageContext=React.createContext();
 
 class PropDrills extends Component {
constructor(props) {
  super(props)

  this.state = {
     obj:{
        message:"Welcome to react..!!",
        name:'pooja rupanwar'
     }
  }
}
 render() {
    return (
      <>
      <h1>Props Drilling</h1>
      <MessageContext.Provider value={this.state.obj}>
        <ChildA/>
      </MessageContext.Provider>
      </>
    )
  }
}

export default PropDrills;


 class ChildA extends Component {
  render() {
    return (
      <>
     
        <h1>I am a Child</h1>
      <MessageContext.Consumer>
              {( obj)=> <h2> {obj.message}</h2>}
          </MessageContext.Consumer>
   
      </>
    )
  }
}

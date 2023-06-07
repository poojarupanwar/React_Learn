import React, { Component } from 'react'

class PropDrills extends Component {
 
  constructor(props) {
    super(props)
  
    this.state = {
        message:'Welcome to the React ..!!!'
    }
  }
  render() {
        return (
      <>
      <h1>Prop Drilling</h1>
      <ChildA/>
      </>
    )
  }
}


export default PropDrills;

class ChildA extends React.Component{
  render(){
    return(
      <>
          <h4>
            I am a ChildA component
          </h4>
          <ChildB/>
      </>
    )
  }
}


class ChildB extends React.Component{
  render(){
    return(
      <>
          <h4>
            I am a ChildB component
          </h4>
          <ChildC/>
      </>
    )
  }
}

class ChildC extends React.Component{
  render(){
    return(
      <>
          <h4>
            I am a ChildC component
          </h4>
      </>
    )
  }
}
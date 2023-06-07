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
      <ChildA message={this.state.message} />
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
            I am a ChildA    
          </h4>
          <ChildB message={this.props.message}/>
      </>
    )
  }
}


class ChildB extends React.Component{
  render(){
    return(
      <>
          <h4>
            I am a ChildB   
          </h4>
          <ChildC message={this.props.message}/>
      </>
    )
  }
}

class ChildC extends React.Component{
  render(){
    return(
      <>
          <h4>
            I am a ChildC
            <h3> {this.props.message}</h3>
          </h4>
      </>
    )
  }
}
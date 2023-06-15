import React, { Component } from 'react'

 class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    handleClick=()=>{
      this.setState({
        count:this.state.count+1})
    }
  render() {
    if(this.state.count===5){
      throw new Error("Your Application Crashed!!!!")
    }
    return (
      <>
      <h2>Counter</h2>
        <button onClick={this.handleClick}>Count :{this.state.count}</button>
        
      </>
    )
  }
}

export default Counter;
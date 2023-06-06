import React, { Component } from 'react'

 class ClassCompLifeCycleMethods extends Component {
 
 //---------- 1.Initialization phase--------------
  constructor(props) {
    console.log("constructor()");
    super(props)
  }

  //----------2.Mounting phase--------------
  static getDerivedStateFromProps(props,state){
    console.log("In Mounting phase");
  }
  componentDidMount(){
    console.log("In Component Did mount");
  }
  render() {
    console.log("render()")
    return (
      <>
        <h1>Hello</h1 >
       </>
    )
  }
}

export default ClassCompLifeCycleMethods;
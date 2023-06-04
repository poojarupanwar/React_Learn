import React, { Component } from 'react'

class ConditionalRendering extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           isLoggedIn:true
        }
      }

  render() {
    // 1.------------ Using if-else -statements--------
    // if(this.state.isLoggedIn){
    //     return <MyComp/>
    // }else{
    //     return <h2>Welcome Guest  !!!</h2>
    // }
    // 2.------ Using Variables ------------------
//     let message;
//     if(this.state.isLoggedIn){
//         message=<h2>Welcome to codemind</h2>
//     }else{
//         message=<h2>Welcome Guest!!</h2>
//     }
//      return message;

    // 3-----------Using ternary operator------------
    // return this.state.isLoggedIn?<h2>Welcome to codeMind!!</h2>:<h2>Welcome Guest!!</h2>
    //------------- Short circuit operator ----------
    return this.state.isLoggedIn && <h2>Welcome to codeMind!!</h2>

  }
}

export default ConditionalRendering;


// const MyComp=()=>{
//     return "Hello World...!!"
// }
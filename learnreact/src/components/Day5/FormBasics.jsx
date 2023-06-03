import React, { Component } from 'react'

export default class FormBasics extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         firstName:'',
         lastName:'',
         mobile:'',
         email:''
      }
    }

    firstNameChange=(e)=>{
   
       this.setState({firstName:e.target.value})
    }
    lastNameChange=(e)=>{
       this.setState({lastName:e.target.value})
    }
    MobileChange=(e)=>{
       this.setState({mobile:e.target.value})
    }
    EmailChange=(e)=>{
       this.setState({email:e.target.value})
    }

    submitFormData=(e)=>{
      // sumit form data
      // validate form  nd store it into the data base
        alert(`first Name ${this.state.firstName} last name :${this.state.lastName} Mobile:${this.state.mobile} Email:${this.state.email}`)
        e.preventDefault();
    }
  render() {
    return (
      <>
      <h1>User Registration form</h1>
      <form onSubmit={this.submitFormData}>
        <label>First Name: <input type="text" value={this.state.firstName} onChange={this.firstNameChange} /></label>  :{this.state.firstName} <br></br>
        <label>Last Name: <input type="text" value={this.state.lastNameChange}  onChange={this.lastNameChange}/></label>:{this.state.lastName}<br></br>
        <label>Mobile: <input type="text" value={this.state.MobileChange}  onChange={this.MobileChange}/></label>:{this.state.mobile}<br></br>
        <label>Email: <input type="text" value={this.state.EmailChange}  onChange={this.EmailChange}/></label>{this.state.email}<br></br>
        <button className="btn btn-primary">Submit</button>
      </form>
      </>
    )
  }
}

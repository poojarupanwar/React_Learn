import React, { Component } from 'react'

class PropsDestructureInClass extends Component {
  render() {

    //destructuring in class

    const {name,company}=this.props;

    return (
        <>
        <h1>Props Destructure In Class</h1>
        <h1>
            name : { name} 
        </h1>
        <h2>
        Company : {company}
        </h2>
        </>
        )
  }
}
export default PropsDestructureInClass;
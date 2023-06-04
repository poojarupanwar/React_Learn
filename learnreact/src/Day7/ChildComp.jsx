import React, { Component } from 'react'

class ChildComp extends Component {
 render() {
   return (
     <div style={{background:'yellow'}}>
       <h3>I am child Comp</h3>
       <h5>Data from Parent Comp: {this.props.message}</h5>
     </div>
   );
 }
}

export default ChildComp

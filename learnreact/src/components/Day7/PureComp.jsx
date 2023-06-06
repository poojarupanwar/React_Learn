import React, { PureComponent } from 'react'

 class PureComp extends PureComponent {

    constructor(props) {
        console.log("constructor");
      super(props)
    
      this.state = {
         count:0
      }
    }

    
    
    incrementCount=() => {
        console.log("incrementCount method called")
       // this.setState({count:this.state.count+1})
       this.setState({count:this.state.count})
    }
  render() {
    console.log('render()');
    return (
      <>
      <h1>
        PureComp
      </h1>
      <h3>Count: {this.state.count}</h3>

      <button onClick={this.incrementCount}>Increnment count</button>
      </>
    )
  }
}
export default PureComp;

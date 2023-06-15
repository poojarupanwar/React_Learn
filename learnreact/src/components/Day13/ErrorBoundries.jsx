import React, { Component } from 'react'
import Counter from './Counter'
 class ErrorBoundries extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         error:null,
         errorInfo:null
      }
    }
    //this error will show when any error will encorted
    componentDidCatch(error,errorInfo){
      console.log("error",error);
      console.log("error info",errorInfo);
      //catch error
      this.setState({
        error:error,
        errorInfo:errorInfo
      })
    }
  render() {

    if(this.state.errorInfo){
      return(<div>
          <h2>
            An Error occur
          </h2>
          <details>
            {this.state.error && this.state.error.toString()}
            <br/>
            {this.state.errorInfo.componentStack}
          </details>
      </div>)
    }
    return (
      <>
        <h2>
        ErrorBoundries
        </h2>
            <Counter/>
        </>
    )
  }
}

export default ErrorBoundries;

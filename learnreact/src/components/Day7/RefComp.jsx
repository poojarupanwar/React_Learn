import React, { Component } from 'react'

 class RefsComp extends Component {
    constructor(props) {
      super(props)
       
      // 1. create ref 
      this.inputRef = React.createRef()
    }
    
    componentDidMount(){
        //access element and focus
        console.log(this.inputRef)
        this.inputRef.current.focus()
    }
  render() {
    return (
      <>
      <h3>Refs in Class Component</h3>
        <div>
            <label>
                {/* 2. Attach created reference to element using ref  */}
                User Name: <input type="text" ref={this.inputRef}/>
            </label>
        </div>
      </>
    )
  }
}

export default RefsComp


//49:00
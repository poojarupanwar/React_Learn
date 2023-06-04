import React,{Component} from "react";
class ClassCompLifeCycleMethods extends  Component {
    //-----------------1.initialization phase --------------------
    constructor(props) {
      console.log('in constructor')
        super(props)
      
        this.state = {
          message:"Welcome Guest",
          showComp:true
        }
    }

    //----------------2. mouting phase  --------------------
    static getDerivedStateFromProps(props,state) {
        console.log("from getDerivedStateFromProps")
        //after initialization phase and before inserting into the dom
        console.log(state.message)
       // return {message:props.message}
    }

    //calls after render 
    componentDidMount(){
        console.log('from componentDidMount')
    }
    
    //---------------------2. update phase method
      // 1. getDerivedStateFromProps 
      //2.U.P
      shouldComponentUpdate(){
          console.log('from shouldComponentUpdate');
          return true;
      }
      //U .P 3
      getSnapshotBeforeUpdate(){
        console.log("from getSnapshotBeforeUpdate")
        return null
      }

     // 4
     componentDidUpdate(){
      console.log("from componentDidUpdate")
     }
    //change message event 
    changeMessage =() => {
      //this.setState({message:"welcome Admin",showComp:false})
      this.setState({showComp:false})
    }

    
    //calls after getDerivedStateFromProps 
    render() {
        console.log("in render")
      return(<><h2>hello :{this.state.message}</h2>
      
       {this.state.showComp && <UmMountingComp/>}
        <button onClick={this.changeMessage}>Change Message</button>
      </>);
    }
    
}
export default ClassCompLifeCycleMethods



class UmMountingComp extends Component {

  componentWillUnmount(){
    console.log('componentWillUnmount')
  }
  
  render() {
    return (
      <>
        <h2>"Hello I am UmMountingComp "</h2>
      </>
    );
  }
}
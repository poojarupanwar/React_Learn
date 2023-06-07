import React from "react";

//creating context
const MessageContext = React.createContext();

class PropDrillsNew extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      obj: { message: "Welcome to the React !!!", name: "John" },
    };
  }
  render() {
    return (
      <>
        <h2>Prop Drilling</h2>
        
        <MessageContext.Provider value={this.state.obj}>
          <ChildA />
        </MessageContext.Provider>
      </>
    );
  }
}
export default PropDrillsNew;

class ChildA extends React.Component {
  render() {
    return (
      <>
        <h4>I am a child A</h4>
         <ChildB />
          </>
    );
  }
}

class ChildB extends React.Component {
  render() {
    return (
      <>
        <h4> I am child B</h4>

        <MessageContext.Consumer>
          {(obj)=><h1>{obj.name}</h1>}
        </MessageContext.Consumer>
        <ChildC />
      </>
    );
  }
}

class ChildC extends React.Component {
  render() {
    return (
      <>
        <h4>I am Child C </h4>
        <ChildD />
      </>
    );
  }
}

class ChildD extends React.Component {
  render() {
    return (
      <>
        <h4>I am Child D </h4>
      
        <MessageContext.Consumer>
          {(obj) => <h2>{obj.name}</h2>}
        </MessageContext.Consumer>
        <ChildE />
      </>
    );
  }
}

class ChildE extends React.Component {
  render() {
    return (
      <>
        <h4>I am Child E </h4>
         <MessageContext.Consumer>
          {(obj) => <h2> {obj.message}</h2>}
        </MessageContext.Consumer>
      </>
    );
  }
}

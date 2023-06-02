// State -Buildin react object that is used to contain data or information about the component.

//State is mutable(we can change over time).

//if state-changes -- comp rerender

import React, { Component } from "react";

class StateComp extends Component {
  constructor(props) {
    super(props); //calls the constructor of component
    this.state = {
      companyName: "Avalara",
      emp: {
        name: "Pooja Rupanwar",
        age: 22,
        city: "Pune",
      },

      //this is called array of object i.e list rendering in react
      todos: [
        { id: 1, title: "Learn HTML , CSS and Bootstrap", completed: true },
        { id: 2, title: "Learn JS", completed: false },
        { id: 3, title: "Learn react and redux", completed: false },
        { id: 4, title: "Learn GIT and Github", completed: false },
      ],
    }

    //Event Binding in constructor
    this.changeCompanyName=this.changeCompanyName.bind(this)

  }

  //Update Company data
  changeCompanyName() {
    this.setState({
      companyName: "AgreeYa",
    })
  }

  //Update Employees Data
  changeEmpData(){
    this.setState({
    emp: {
        name: "Ganesh Rupanwar",
        age: 18,
        city: "Mumbai",
      },
    })
  }

  //Update Task

  UpdateTask(){
    this.setState(prevState=>({
        todos:prevState.todos.map(todo=>
            todo.id===2?{...todo,completed:!todo.completed}:todo)
    }))
  }

  render() {
    return (
      <>
        <h1>This is State Component</h1>
        <h1>Learn React with {this.state.companyName}</h1>

        {/* Event Binding in Render */}
        {/* <button onClick={this.changeCompanyName.bind(this)}> */}
        <button className="btn btn-primary" onClick={this.changeCompanyName}>
          Change Company Name
        </button>
        <br></br>{" "}
        <h1>
          *********************** Employee Information **********************
        </h1>
        <h2>My name is : {this.state.emp.name}</h2>
        <h2>My company name is :{this.state.companyName}</h2>
        <h2>My Age is :{this.state.emp.age} </h2>
        <h2>My City is : {this.state.emp.city}</h2>

        <button className="btn btn-primary" onClick={this.changeEmpData.bind(this)}>
          Change Employee Data
        </button>

        {/* list rendering */}
        <h1>*********************** TODO Information **********************</h1>
        <ul>
          {this.state.todos.map((task) => (
            <li key={task.id}>
              {task.title} - {task.completed ? "Complete" : "Incomplete"}
            </li>
          ))}
        </ul>

        <button className="btn btn-primary" onClick={this.UpdateTask.bind(this)}>
         Update Task
        </button>
        
      </>
    );
  }
}

export default StateComp;

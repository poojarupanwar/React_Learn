import React, { createRef } from 'react'

const UncontrolledComp = () => {
    const userNameRef= React.createRef();
    const passwordRef= React.createRef();

    const handleLogin=(e)=>{
        console.log(userNameRef.current.value);
        console.log(passwordRef.current.value);
        e.preventDefault();
    }

  return (
    <>  
    <div style={{marginLeft:'150px' , marginRight:'150px'}}>
    <h4>Login Form</h4>
    <form onSubmit={handleLogin}>
      <div className="row" >
        <div className="six columns"  style={{ marginLeft:'300px'}}>
          <label htmlfor="exampleEmailInput">Enter Username</label>
          <input className="u-full-width" 
          type="text" placeholder="Enter User Name" 
          id="exampleEmailInput" ref={userNameRef} />
        </div>
        </div>
        <div className="row">
        <div className="six columns"  style={{ marginLeft:'300px'}}>
        <label htmlfor="exampleEmailInput">Password</label>
          <input className="u-full-width" 
          type="password" placeholder="Enter your password" 
          id="examplePasswordInput" ref={passwordRef}/>
        </div>
        
      </div>
      <div className="row">
        <button className="button-primary" type="submit"  style={{ marginTop:'20px'}} value="Submit">Login</button>
        </div>
    </form>
    
    </div>
    </>
  )
}

export default UncontrolledComp
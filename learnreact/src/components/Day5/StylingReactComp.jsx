import React, { Component } from 'react'
import './stylecomp.css' 
 
class StylingReactComp extends Component {
  render() {
    //Internl CSS
    const paragrph={
          color:"pink",
          background:"blue",
          padding:"10px",
          margin:"20px",
          fontSize:'40px',
          fontFamily:'Times New Romen'
    }
    return (
      <>
      {/* Inline CSS */}
      <h1 style={{color:"white",background:"black",padding:"20px",margin:"20px"}}>Styling ReactComp In Inline Styling</h1>

      <p style={paragrph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, animi? Nemo explicabo asperiores magni dolore sequi! Reprehenderit aliquid maxime modi expedita possimus, unde quibusdam accusamus neque vitae dignissimos nihil soluta.</p>
     
     {/* Externl CSS */}
      <h4 className="h4Color">This is external CSS</h4>
      </>
    )
  }
}

export default StylingReactComp;
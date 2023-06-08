import React, { useEffect, useState } from 'react'

const UseEffectHook=()=> {
    const[count,setCount]=useState(0)
    const[name,setName]=useState("pooja")
    // useeffect with no dependencies
    useEffect(()=>{
        console.log("useEffect -runs on every render");
    })
 // useeffect with  dependencies
  
    useEffect(()=>{
        console.log("useEffect -runs on First render");
    },[])

    useEffect(()=>{
        console.log("useEffect -runs on First render");
    },[name])
  return (
    <>
    <h1>UseEffectHook</h1>
    <h1>Count: {count}<button onClick={()=>setCount(count+1)}>+</button></h1>
    <h1>Name: {name}<button onClick={()=>setName("kirti")}>Update Name</button></h1>
    </>
  )
}

export default UseEffectHook;
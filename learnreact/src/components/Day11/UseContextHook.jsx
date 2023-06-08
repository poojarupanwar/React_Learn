// import React, { useContext } from 'react'
// import MyContext from './MyContext'

// const UseContextHook=()=> {
//     const contextValue={
//       msg:"hello from context",
//         count:35
//     }
//   return (
//     <> 
//      <MyContext.provider value={contextValue}>
//      <ParentComp/>
//        </MyContext.provider>
//      </>
//   )
// }

// export default UseContextHook

 
//   const ParentComp=()=> {
//   return (
//     <>
//     <h2>
//       I m Parent Comp
//     </h2>
//     <ChildA/>
//     </>
//   )
// }
//  const ChildA=()=> {
//   return (
//     <>
//     <h2>
//       I m Child A
//     </h2>
//     <ChildB/>
//     </>
//   )
// }
// const ChildB=()=> {
//   return (
//     <>
//     <h2>
//       I m Child B
//     </h2>
//     <ChildC/>
//     </>
//   )
// }
//   const ChildC=()=>{
//     const context=useContext(MyContext)
//   return (
//     <>
//     <h2>
//       I m Child C
//     </h2>
//       <h2>{context.count}</h2>
//     </>
//   )
// }


import React,{useContext} from 'react';
import MyContext from './MyContext';
//create a new context
//const MyContext= React.createContext()

const UseContextHook =()=>{
    //define the value that will be provided to consumers of the context 
    const contextValue ={
        message:"Hello from Context",
        count:34
    }
    return(
        <>
            <MyContext.Provider value={contextValue}>
                <ParentComp/>
            </MyContext.Provider>
        </>
    )
}
export default UseContextHook



const ParentComp =()=>{
    return(
        <>
        <h3>I am Parent comp </h3>
        <ChildAComp/>
        </>
    )
}

const ChildAComp =()=>{
    return(
        <>
        <h3>I am ChildAComp comp </h3>
        <ChildBComp/>
        </>
    )
}
const ChildBComp =()=>{
    return(
        <>
        <h3>I am ChildBComp comp </h3>
        <ChildCComp/>
        </>
    )
}
const ChildCComp =()=>{
    const context = useContext(MyContext)
    return(
        <>
        <h3>I am ChildCComp comp </h3>
        <h4>Message:{context.message}</h4>
        <h4>Count:{context.count}</h4>
        </>
    )
}
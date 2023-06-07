import React, { useEffect, useRef} from 'react'

 const UseRefHook=()=> {
    const inputRef=useRef()

    useEffect(()=>{
        inputRef.current.focus()
    })
  return (
    <>
    <h1>UseRefHook</h1>
    userName:<input type="text" name='username' ref={inputRef}/>
    </>
  )
}
export default UseRefHook;
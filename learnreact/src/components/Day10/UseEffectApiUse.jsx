import React, { useEffect } from 'react'

 function UseEffectApiUse() {
    useEffect(()=>{
        const getPostData=()=>{
            try{
                const pData=axios.get()
            }catch(error){
                console.log(error);
            }
        }
    },[])
  return (
    <><h1>UseEffectApiUse</h1></>
  )
}
export default UseEffectApiUse;
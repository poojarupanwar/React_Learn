import React from 'react'

const MemoComp=(props)=> {
    console.log("I am moemo comp");
  return (
    <div>MemoComp:{props.count}</div>
  )
}

export default React.memo(MemoComp)
// export default MemoComp
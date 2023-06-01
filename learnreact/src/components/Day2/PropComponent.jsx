import React from 'react';
//read only i.e (props cannot be change)
const PropsComponent=(props)=>{
    const {name,company}=props;
    return(
        <>
        <h1>This is PropComponets </h1>
        <h2>Hi.. My name is {name}</h2>
        <h2>I work at { company}</h2>
        </>
    )
}
export default PropsComponent;

//00:48
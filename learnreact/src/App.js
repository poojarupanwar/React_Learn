// import logo from './logo.svg';
// import { useState } from 'react';
import './App.css';
// import UseContextHook from './components/Day11/UseContextHook';
// import PropDrills from './components/Day8/PropDrills';
// import PropDrillsNew from './components/Day8/PropDrillsNew';
// import UseEffectApiUse from './components/Day10/UseEffectApiUse';
// import UseRefHook from './components/Day10/UseRefHook';
// import UseEffectHook from './components/Day10/UseEffectHook';
// import ClassCompLifeCycleMethods from './components/Day5/ClassCompLifeCycleMethods';
// import PropDrills from './components/Day8/PropDrills';
// import ConditionalRendering from './components/Day4/ConditionalRendering';
// import PureComp from './components/Day7/PureComp';
// import ParentComp from './Day7/ParantComp';
// import FormBasics from './components/Day5/FormBasics';
// import PropsComponent from './components/Day2/PropComponent';
// import PropsDestructureInClass from './components/Day2/PropsDestructureInClass';
// import StateComp from './components/Day3/StateComp';
// import StylingReactComp from './components/Day5/StylingReactComp';
// import FunctionComponent from './components/Day2/FunctionComponent';
// import ClassComponent from './components/Day2/ClassComponent';
// import Home from './components/Day11/Home'
// import About from './components/Day11/About'
// import ContactUs from './components/Day11/ContactUs'
// import Services from './components/Day11/Services'
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import MemoComp from './components/Day13/MemoComp';
import ErrorBoundries from './components/Day13/ErrorBoundries';
 
 
function App() {
//   const [count,setCount]=useState(0)

//   setInterval(()=>{
// setCount(count+1)
//   },3000);
  return (
    <div className="App">
        
          {/* hello.. */}
           {/* <ClassComponent/> */}
           {/* <FunctionComponent/> */}
           {/* <PropsComponent name='pooja' company='avalara'/> */}
           {/* <PropsDestructureInClass name="pooja" company="Avalara"/> */}
           {/* <StateComp/> */}
           {/* <StylingReactComp/> */}
           {/* <ClassCompLifeCycleMethods/> */}
           {/* <FormBasics/> */}
           {/* <ParentComp/> */}
           {/* <ConditionalRendering/> */}
           {/* <PureComp/> */}
            {/* <PropDrills/> */}
            {/* <UseEffectHook/> */}
            {/* <UseRefHook/> */}
            {/* <UseEffectApiUse/> */}
            {/* <PropDrillsNew/> */}
            {/* <UseContextHook/> */}
{/* 
            Count:{count}
          <MemoComp count={count}/> */}

          <ErrorBoundries/>
           {/* <Router>
            <div>
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/contact'>Contact</Link>
                </li>
                <li>
                  <Link to='/about'>About Us</Link>
                </li>
                <li>
                  <Link to='/services'>Services</Link>
                </li>
              </ul>
            </div>

            <Routes>
              <Route exact path='/' element={<Home/>}> </Route>
              <Route exact path='/contact' element={<ContactUs/>}> </Route>
              <Route exact path='/about' element={<About/>}> </Route>
              <Route exact path='/services' element={<Services/>}></Route>
            </Routes>
           </Router> */}

    </div>
  );
}

export default App;

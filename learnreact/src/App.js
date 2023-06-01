// import logo from './logo.svg';
import './App.css';
import PropsComponent from './components/Day2/PropComponent';
// import FunctionComponent from './components/Day2/FunctionComponent';
// import ClassComponent from './components/Day2/ClassComponent';

function App() {
  return (
    <div className="App">
         <h1>
          hello
           {/* <ClassComponent/> */}
           {/* <FunctionComponent/> */}
           <PropsComponent name='pooja' company='avalara'/>
        </h1>
       
    </div>
  );
}

export default App;

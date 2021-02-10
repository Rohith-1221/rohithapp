import logo from './logo.svg';
import './App.css';
import Demo from './components/demo';
import Cod from './components/code';
import ClassBasedCom from './components/classBasedComponent';
import Hooks from './components/hooksinc';
import { Profiler } from 'react';
import Data from './data/data.json';
//import {BrowserRouter,Route,Link} from 'react-router-dom';
//import Profile from './components/profile';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Demo></Demo>
       <Cod name="Rohith">MYM</Cod>
       <Cod name="Chan">CPT</Cod>
       <Home />
       <ClassBasedCom name="rohith" tour="mylavaram"></ClassBasedCom>
       <h1>Hooks concept</h1>
       <Hooks/>      
    </div>
     //<div>
     //   <BrowserRouter>
     //   <Route exact path="/myfirstapp" Component={Home}/>
     //   <Route exact path="/Profile" Component={Profile}></Route>
     //   </BrowserRouter>
     //</div>
  );
}
let Home=()=>{
  return(
    <h1>this is my component</h1>
  );
}

export default App;

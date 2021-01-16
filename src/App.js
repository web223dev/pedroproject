import React,{useEffect} from 'react'
import './App.css';
import {Switch,Route} from 'react-router-dom'
import Home from './Pages/Home/Home';
import Project2 from './Pages/Project2/Project2';
import Project3 from './Pages/Project3/Project3';
import Project4 from './Pages/Project4/Project4';
import Project5 from './Pages/Project5/Project5';
function App() {
  return (
    <div className="App">
      {/* <Switch> */}
        <Route path="/" component={Home}/>
        <Route path="/project2" component={Project2}/>
        <Route path="/project3" component={Project3}/>
        <Route path="/project4" component={Project4}/>
        <Route path="/project5" component={Project5}/>
      {/* </Switch> */}
    </div>
  );
}

export default App;

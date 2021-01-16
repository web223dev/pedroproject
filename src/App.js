import React,{useEffect} from 'react'
import './App.css';
import {Switch,Route} from 'react-router-dom'
import Home from './Pages/Home/Home';
function App() {
  return (
    <div className="App">
        <Route path="/" component={Home} />
    </div>
  );
}

export default App;

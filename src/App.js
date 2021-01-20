import React from 'react'
import './App.css';
import {Switch,Route} from 'react-router-dom'
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/about" component={About} />
        </Switch>
    </div>
  );
}

export default App;

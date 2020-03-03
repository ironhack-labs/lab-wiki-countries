import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path="/:id" component={About} />
      </Switch>
    
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Country from './components/Country';
import Home from './components/Home';
import CountriesList from './components/CountriesList';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />     
        <div className='container'>
          <div className='row'>
              <div className='col-5'>
                <CountriesList />
              </div>
              <div className='col-7'>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/:id' render={(props) => <Country {...props} />} />
                </Switch>
              </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import CountryList from './components/CountryList';
import CountryDetail from './components/CountryDetail';
import CountryContextProvider from './contexts/CountryContext';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div id="root">
        <div>
          <CountryContextProvider>
            <Navbar/>
            <div class="container">
              <div class="row">
                <CountryList/>
                <Route exact path='/:cca3' component={CountryDetail}/>
              </div>
            </div>  
          </CountryContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;

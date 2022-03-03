// General imports

import './App.css';
import React from 'react'
import {Routes, Route} from 'react-router-dom'

// Component imports

import NavBar from './Components/NavBar/NavBar';
import CountryList from './Components/CountryList/CountryList';
import CountryDetails from './Components/CountryDetails/CountryDetails';


// Main function

function App() {

  return (
    <div className="App">
      <NavBar/>

      <div className='container'>
        <div className='row'>

            <CountryList/>
                
                <Routes>
                    <Route path="/:id" element={<CountryDetails/>}></Route>
                </Routes>
  

        </div>
     </div>
    
     
    </div>
  );
}

export default App;

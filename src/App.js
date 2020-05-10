import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import NavBar from './components/NavBar'
import jsonList from './countries.json'
import { Route } from 'react-router-dom';

function App() {



  return (
    <div className="App">
<NavBar></NavBar>

     <div className="container">
        <div className="row">
<Route exact path='/countries'>
<CountriesList list={jsonList}/>
</Route>
<Route exact path="/countries/:id" component={CountryDetails} >

</Route>
        </div>
        </div>

    
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountryDetail from './components/CountryDetail.js';
import CountriesList from './components/CountriesList.js'
import {Switch, Route} from 'react-router-dom';
const App = () => {
  return (

    <div className="App">
   <CountriesList/> 
      <Switch>
    <Route exact path= '/' component= {CountryDetail}/>
     
    </Switch>
    </div>
  );
}

export default App;

/*, Recibir el archivo countries.json en CountriesList.js especificando el cca3  para renderizarlo en app.js.
recibir el id cca3 (código de país) en CountryDetail.js
Unificar el renderizado de CountriesList y CountryDetail
Renderizarlo todo en App.js?
En Index se renderizará App.js?*/
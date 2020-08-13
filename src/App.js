import React from 'react';
import './App.css';
import CountriesList from './components/CountriesList';
//añadimo paquete para función de path entre partes de la app, en este caso entre CountriesList y CountryDetail
import { Route } from 'react-router-dom';
import CountryDetail from './components/CountryDetail';
//más abajo en el momento de añadir countryDetail lo que hacemos es añadir ruta dónde el path será lo que esté escrito detrás del /
//y el componente a dónde queremos ir, en este caso countryDetail.


function App() {
  return (
    <div className="App">
      <div>
        <CountriesList/>
      </div>
      <div>
        <Route exact path='/:cca3' component={CountryDetail}/>
      </div>
    </div>
  );
}

export default App;

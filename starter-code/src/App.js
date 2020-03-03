import React from 'react';

import './App.css';
import countries from './countries.json';
import Navbar from './components/Navbar';
import CountryDetail from './components/CountryDetail';

function App() {
  return (
    <div className="App">
      <Navbar />

    <div className="container">
      <div className="row">
        <div className="col-5" style={{"maxHeight": "90vh", "overflow": "scroll"}}>
          <div className="list-group">
            {countries.map((item, index) => {
              return <a key={index} className="list-group-item list-group-item-action" href={item.cca3}> <span role="img">{item.flag}</span>  {item.name.common}</a>
            })}
          </div>
        </div>
        <div className="col-7">
        <CountryDetail  name= {countries[0].name.common} capital ={countries[0].capital} area= {countries[0].area} borders={[{"AND":"Andorra"}, {"BEL":"Belgium"}]}/>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;

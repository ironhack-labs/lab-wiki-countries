import React from 'react';
import Countries from './components/Countries'
import data from './countries.json'

import './App.css';

function App() {

  return (
    <div className="App">
      <Countries countries={data}/>
    </div>
  );
}

export default App;

// src/App.js
import { useState } from "react";
import "./App.css";

import countries from './countries.json';

function App() {

const [countriesArr, setCountiesArr] = useState(countries)

console.log(countriesArr)

  return <div className="App"></div>;
}
export default App;
import "./App.css";
import countries from "./countries.json"
import { useState } from "react"

function App() {
  const [countries, setCountries] = useState(countriesJSON)

  return <div className="App"></div>;
}
export default App;
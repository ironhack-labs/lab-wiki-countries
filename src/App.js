import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import countryArr from './data/countries.json'
import CountriesList from "./components/CountriesList";

function App() {


  const [countries, setCountries] = useState(countryArr)









  return( 
  
    <div className="App">



      <Navbar />
      
      { countries.map((country, index) => {
        return <CountriesList listOfCountries={country} key={index}/>
      })}
      
      
      



    </div>







    



  


  )
}


export default App;
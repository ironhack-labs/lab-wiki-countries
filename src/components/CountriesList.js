import axios from 'axios';
import { useEffect, useState } from 'react';
import "../countries.json";

function CountriesList() {

    const [countries, setcountries] = useState([])

    useEffect(() => {
        axios.get("https://ih-countries-api.herokuapp.com/countries")
          .then((response) => {
            setcountries(response.data)
          })
          .catch(e => console.log("error getting countries list", e));
      }, [])
    

    return (
        <div>
        <h1>Countries List</h1>
            {countries.map((element) => {
                return (
                  <div key={element.id} className="box">
                  <h3><a href={element.alpha3Code}>{element.name.common}</a></h3>
                  </div>
              )})}
        </div>
    )
}

export default CountriesList;
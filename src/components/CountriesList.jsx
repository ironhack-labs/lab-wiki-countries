
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CountriesList = () => {
const [countrylist, setCountrylist] = useState([]);

useEffect(() => {
    axios.get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        setCountrylist(response.data)
      })
      .catch(e => console.log("error getting countries list", e));
  }, [])

  return (
    <div>
    <h1>Country List</h1>
        {countrylist.map((element) => {
            return (
              <div className="box" key={element.id}>
              <h3><a href={element.alpha3Code}>{element.name.common}</a></h3>
              {/* <Link to={`/${element.alpha3Code}`}>{element.name.common}</Link> */}
              </div>
          )})}
    </div>
)
}

export default CountriesList;
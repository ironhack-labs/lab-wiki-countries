import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';

function CountriesList() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // console.log("se esta cargando")
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setCountries(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const divStyle = {
    maxHeight: "90vh",
    overFlow: "scroll",
  };
  
  return (
    <div className="col-5" style={divStyle}>
      <div className="list-group">

        {countries.map((eachCountry) => {
          return (
            <Link key={eachCountry.alpha3Code} className="list-group-item list-group-item-action" to={`/${eachCountry.alpha3Code}`}>{eachCountry.name.common}</Link>

          )
        }) }
        
      </div>
    </div>
  );
}

export default CountriesList;

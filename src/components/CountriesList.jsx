import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CountriesList() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries`)
      .then((response) => {
        setCountries(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-5" style={{ height: '90vh', overflow: 'scroll' }}>
          {countries.map((country) => {
            return (
              <div key={country.alpha3Code} className="list-group">
                <div className="list-group-item list-group-item-action">
                  <Link to={`${country.alpha3Code}`}>
                    <img
                      src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                      alt=""
                    />
                    <h2>{country.name.official}</h2>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CountriesList;

// function CountriesList(props) {
//   const { countries } = props;
//   const [allCountries, setAllCountries] = useState([]);
//   useEffect(() => {
//     setAllCountries(countries);
//   }, [countries]);

//   return (
//     <div>
//       <h2>Countries List</h2>
//       {allCountries.map((country) => {
//         return (
//           <div key={country.name.common} className="country">
//             <h3>
//               <Link to={`${country.alpha3Code}`}>{country.name.common}</Link>
//             </h3>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

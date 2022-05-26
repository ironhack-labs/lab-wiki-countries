import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CountriesList(props) {
  const { countries } = props;
  
  // const [sortedData, setSortedData] = useState([]);
  // useEffect(() => {
  //   const sorted = [...countries].sort((a, b) => a.name.official - b.name.official);
  //   console.log(sorted)
  //   setSortedData(sorted);
  // }, [countries]); 
 

  
  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <div className="list-group"></div>
          <h1 className="py-3" >Country List</h1>
          {countries.map((country) => {
            return (
              <div key={country.alpha3Code}>
                <Link to={`/${country.alpha3Code}`} className="py-4 list-group-item list-group-item-action">
                  <div> <img width="150" src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
                  </div>
                  {country.name.common}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CountriesList;

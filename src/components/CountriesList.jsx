import React from 'react';
import { Link, NavLink } from 'react-router-dom';


export default function CountriesList({countries}) {
  return (
    // <div className="col-5" style="max-height: 90vh; overflow: scroll">
    //   <div className="list-group">
    //     {countriesList.map((country) => (
    //       <Link
    //         className="list-group-item list-group-item-action"
    //         to="/ABW"
    //         key={country.alpha3Code}
    //       >
    //         {country.name}
    //       </Link>
    //     ))}
    //   </div>
    // </div>




          <div className="list-group">
            {countries.map((country) => (
              <Link
                className="list-group-item list-group-item-action"
                to={`/country/${country.alpha3Code}`}
                key={country.alpha3Code}
              >
                
                {country.name.common}
              </Link>
            ))}
          </div>



  );
}

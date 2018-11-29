import React from 'react';
import { Link } from 'react-router-dom';

const country = ({countries}) => {

  return (
      <div className="col-5 country-style">
        <div className="list-group">
          {countries.map((eachCountry, index) => {
          return (
            <div key={index}>
              <Link to={`/${eachCountry.cca3}`} className="link list-group-item list-group-item-action">{eachCountry.name.common}</Link>
            </div>
          )
          })}
        </div>
      </div>
  )
}

export default country;
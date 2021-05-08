import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

const CountriesList = () => {

 
  return (
    <div className="container">
      <div className="row">
        <div className="col-5" >
          <div className="list-group">

            <ul>
              {
                countries.map((countryItem) => {
                  return (

                    <li className="list-group-item list-group-item-action" key={countryItem.cca3}><Link to={countryItem.cca3}>{countryItem.flag} {countryItem.name.common}</Link></li>
                 )


                })
              }
            </ul>

          </div>
        </div>
      </div>
    </div>
  )
}


export default CountriesList;
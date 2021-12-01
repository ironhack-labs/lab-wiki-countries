import React from 'react'
import { Routes, Route, Link } from "react-router-dom";

import CountryDetails from '../CountryDetails/CountryDetails'




function CountriesList({ countries }) {


  return (
    <>

      <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
        {countries.map(country => {
          return (
            <div key={country.name} className="list-group">
              {/* //Uncomment to work with Local Json file */}
              {/* <Link className="list-group-item list-group-item-action" to={`/"${country['cca3']}"`}>{country['cca3']}</Link> */}
              <Link style={{ display: "flex", justifyContent: "space-between" }} className="list-group-item list-group-item-action" to={`/${country.alpha3Code}`}> <img className="flag" src={country.flag} /> {country?.name}</Link>
            </div>
          )
        })}
      </div>
      <Routes>
        <Route path="/:code" element={<CountryDetails />} />
      </Routes>
    </>

  )
}

export default CountriesList

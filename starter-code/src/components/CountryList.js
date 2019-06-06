import React from 'react';
import countries from "../countries.json"
import { Link } from 'react-router-dom';

const countryList = () => {

  return (
    <div className="container">
      <div className="row">
        <div className="col-5" style={{maxHeight: 90 +"vh", overflow: "scroll"}}>
          <div className="list-group">
            {countries.map(e =><Link className="list-group-item list-group-item-action" to={`/list/${e.cca3}`}>{e.flag}{e.name.common}</Link>  
                )}
          </div>
        </div>
      </div>
    </div>

  )
}
export default countryList
  
// countries.map (country)
// <Link `/list/${country.ccar}?name=${country.name.common}`
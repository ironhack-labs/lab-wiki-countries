import React from 'react'
import { Link } from 'react-router-dom'
import uuid from 'react-uuid'
export default function CountriesList(props) {
    const {countriesList} = props;
    if (countriesList === null) {
        return <h3>...Loading</h3>
      }
  return (
      <>
      <div class="col-5 correctWidth">
        <div class="list-group">

        {
            countriesList.map(elem => {return (
                <div key={uuid()} className="list-group-item list-group-item-action">
                    <Link to={`/details/${elem.alpha3Code}`}>{elem.name.common}</Link>
                </div>
            )})
        }
        </div>
    </div>
    </>
  )
  
}

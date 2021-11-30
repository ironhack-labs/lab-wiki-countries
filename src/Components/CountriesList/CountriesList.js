import React from 'react'
import { Link } from 'react-router-dom'



function CountriesList({ list }) {
  return (
    <div>
      Countries List
      {list.map(country => {
        return (<div class="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
          <div className="list-group">
            <Link className="list-group-item list-group-item-action" path="/">{country['cca3']}</Link>

          </div>
        </div>)


      })}
    </div>
  )
}

export default CountriesList

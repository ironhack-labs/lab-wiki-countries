import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Data from '../countries.json'


export default class CountryContainer extends Component {

  state={
    countries: Data
  }
  render() {
    const {countries} = this.state

    return (
      <>
        <div class="container">
          <div class="row">
            <div class="col-5" style={{maxHeight:' 90vh', overflow: 'scroll'}}>
              
              {/* Div de pais
               <a class="list-group-item list-group-item-action" href="/ABW">🇦🇼 Aruba</a>
              */}
              {
                countries.map((country,id)=>(
                  <div class="list-group" style={{textAlign:'initial'}}key={id}>
                    <Link className="list-group-item list-group-item-action" to={`/country/${country.cca3}`}>
                    <span >{country.flag} {country.name.common}</span>
                    </Link>
                  </div>
                ))
              }
              
            </div>
          </div>
        </div>
          <div class="col-7"></div>
        
      </>
    )
  }
}

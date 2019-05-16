import React from 'react'
import countries from '../countries.json'
import { Link, Route } from 'react-router-dom';
import CountryDetail from '../components/CountryDetail'
class AllCountries extends React.Component {
  state = {
    allCountries: countries,
  }

  showCountries = () => {
    let copyAllCountries = this.state.allCountries.map((eachCountry, i) => {
      console.log(eachCountry)
      return ( 
        <div key = {eachCountry.cca3}>
        {/* <Link>{eachCountry.flag} {eachCountry.name.official}</Link> */}
        <Link to={`/eachcountry/${eachCountry.cca3}`}
        className="list-group-item list-group-item-action">
        {eachCountry.flag} {eachCountry.translations.rus.official}</Link>
        
        </div>
    )
  })
  return copyAllCountries
  }
  render() {
    return (
      <div>

        
<div className="row">
        <div className="col-5">
          <div className="list-group">
            {this.showCountries()}
          </div>
        </div>
        {/* <Route exact path="/country/:id" component={CountryDetails} /> */}
        
        <Route exact path="/eachcountry/:id" 
              component= {  (props) =>  <CountryDetail {...props } {...this.state} /> }/> 

      </div>

    </div>
    )
  }
}

export default AllCountries
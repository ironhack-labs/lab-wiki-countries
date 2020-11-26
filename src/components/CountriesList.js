import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import countries from '../countries.json'
import CountryDetails from './CountryDetails'


// const CountryDetails = () => <h1 className="title">Details</h1>

function CountryList() {
  return (
    <Router>
      <div style={{display:'flex', flexDirection:'row'}} >
        <div>
          <ul className="col-5" style={{listStyle:'none', maxHeight:'600px', maxWidth:'500px', overflow: 'scroll'}}>
            {countries.map(country => (
              <li key={country.ccn3} style={{border:'lightgray solid 1px'}}>
                <Link to={`/country/${country.cca3}`}>
                {country.flag}
                  {country.name.common}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <Switch>
            <Route component={CountryDetails} path='/country/:cca3' />
          </Switch>
        </div>
        </div>
    </Router>
  )
}

export default CountryList
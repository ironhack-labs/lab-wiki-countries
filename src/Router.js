import React from 'react'
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import countries from './countries.json'
import CountryDetails from './components/CountryDetails'

function RouterApp(){

    return(
        <Router>
            <nav className="navbar navbar-dark bg-primary mb-3">
                <div className="container">
                    <h1>WikiCountries</h1>
                </div>
            </nav>
            <div className="container">

<div className="row">

  <div className="col-5" >
    <div className="list-group">
        {countries.map(country=>(
            <Link className="list-group-item list-group-item-action" key={country.cca3} to={`/${country.cca3}` }>
                {country.flag}
            
                {country.name.common}
                
            </Link>
        ))
        }
      
    </div>
  </div>
  <div className="col-5">
      <Switch>
          <Route component={CountryDetails} path='/:cca3'/>
      </Switch>
  </div>



</div>
</div>
        </Router>
    )
}


export default RouterApp
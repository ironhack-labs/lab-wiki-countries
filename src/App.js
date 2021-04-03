import './App.css';
import Navbar from './components/Navbar/Navbar'
import CountriesList from './components/CountriesList/CountriesList'
import CountryDetails from './components/CountryDetails/CountryDetails'
import { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom'
import data from './countries.json'
import {getCountries} from './services/BaseService'

class App extends Component {
  state = {
    countries: [],
    loading: true
  }

  componentDidMount() {
    getCountries()
    .then(countries => this.setState({countries, loading: false}))
  }
  
  render() {
    return(
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll"}}>
              <div className="list-group">
                {
                  this.state.loading
                    ? (<p>Cargando...</p>
                      
                    )
                    : (
                    this.state.countries.map((country) => 
                      <Fragment key={country.alpha3Code}>
                        <CountriesList {...country} />
                      </Fragment>
                    )
                  )
                }
              </div>
            </div>
              {
                <Switch>
                  <Route exact path="/:alpha3Code" render={(props) => <CountryDetails props={props} countriesD={this.state.countries} />} />
                </Switch>
              }
          </div>
        </div>
      </div>
    ) 
  }
}

export default App;

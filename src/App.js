import './App.css';
import Navbar from './components/Navbar/Navbar'
import CountriesList from './components/CountriesList/CountriesList'
import CountryDetails from './components/CountryDetails/CountryDetails'
import { Component, Fragment } from 'react';
import { Route } from 'react-router-dom'
import data from './countries.json'

class App extends Component {
  state = {
        countries: [...data]
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
                  this.state.countries.map((country) => 
                    <Fragment key={country.cca3}>
                      <CountriesList {...country} />
                    </Fragment>
                  )
                }
                <CountryDetails countries={this.state.countries} />
                <Route path="/:code" component={CountryDetails} />
              </div>
            </div>
          </div>
        </div>
      </div>

    ) 
  }
}

export default App;

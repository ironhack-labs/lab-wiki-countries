import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/countries/Home'
import CountryDetail from './components/countries/CountryDetail'
import CountriesList from './components/countries/CountriesList';
import Projects from './components/projects/Projects';
import ProjectDetail from './components/projects/ProjectDetail';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';


const App = () => {

  const initialState = {
    countries: []
  }

  const [state, setState] = useState(initialState)

  useEffect(() => {
    const getCountries = async () => {
      try {
          const response = await axios.get("https://restcountries.eu/rest/v2")
          setState(state => ({
              countries: response.data
          }))
      } catch(err) {
          console.log("AXIOS ERROR : ", err);
      }
    }
    getCountries()
  }, [])

  return (
    <div className="App text-center">
      <NavBar />

      <Switch>
        <Route exact path="/" component={Projects} />
        <Route exact path="/project/:id" component={ProjectDetail} />
      </Switch>

      {/* <div className="row">
        <CountriesList data={state.countries} />
        <div className="ml-5">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/country/:id" render={props => <CountryDetail data={state.countries} {...props} /> } />
          </Switch>
        </div>
      </div> */}
    </div>
  );
}

export default App;

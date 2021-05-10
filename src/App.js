import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import { Route, Switch } from 'react-router';
import CountryDetails from './components/CountryDetails/CountryDetails';


function App() {

  const [countries, setcountries] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json()).then(data => {
        setcountries(data)
        setLoading(false)
    })
  }, [countries])

  return (
    <div className="App">
<Navbar />

      <div className="container mt-4">

        { loading
            ? 'Loading content...'
            : <div className="row">
                <div className="col-sm-4">
                  <CountriesList countries={countries} />
                </div>
                <div className="col-sm-8">
                  <Switch>
                    <Route path="/:code" render={ (historyProps) => <CountryDetails {...historyProps} countries={countries} />} />
                    <Route path="/"><h1>Select a country</h1></Route>
                  </Switch>
                </div>
              </div>
        }

      </div>
    </div>
  );
}
export default App;
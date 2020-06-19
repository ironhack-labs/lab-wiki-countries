import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import CountriesList from './components/CountriesList'
import CountryDetail from './components/CountryDetail'
import 'bootstrap/dist/css/bootstrap.css'
import countries from './countries'



class App extends React.Component  {

  state = {
    countries: countries
}
  
  render() {

    return (
      <>
        <div className='container'>
          <div className='row'>
            <div className='col-sm'>
              <CountriesList/>
            </div>
            <div className='col-sm'>
              <Switch>
                <Route exact path="/" component={CountriesList} />
                <Route path="/countries/:id" component={CountryDetail} />
              </Switch>
            </div>

          </div>
        </div>
      </>
    );

  }
  
}

export default App;

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import CountryDetail from './components/CountryDetail'
import countriesJson from './countries.json'
import { Route, Link } from 'react-router-dom';
import CountryInfo from './components/CountryInfo'
import './style.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: countriesJson
    }
  }


  render() {
    return (
      <div className="App container">
        <div className='row'>
          <div className="col-3 countries">
            <div className="list-group">
              {
                this.state.data.map(e => <Link to={e.cca3}><CountryDetail name={e.name.official} path={'/' + e.name.official} /></Link>)
              }
            </div>
          </div>
          <div className='col-9'>
            <div className='element details'>

              {countriesJson.map(e => <Route path={`/${e.cca3}`} render={() => <CountryInfo country={e}/>} />)}
            
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import CountryDetail from './components/CountryDetail'
import countriesJson from './countries.json'
import { Route } from 'react-router-dom';
import CountryInfo from './components/CountryInfo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='container' style={{ width: '500px', float: 'left' }}>
          <div className="row">
            <div className="col-5">Column 5/12</div>
            <div className="col-7">Column 7/12</div>
          </div>


          <div className="list-group">
          
          {
            countriesJson.map(e => <Route path='/angola'><CountryDetail name={e.name.official} path={'/' + e.name.official} /></Route>)
          }
            <a href="#" className="list-group-item list-group-item-action active">something wateever</a>
            <a href="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
            <a href="#" className="list-group-item list-group-item-action">Morbi leo risus</a>
            <a href="#" className="list-group-item list-group-item-action">Porta ac consectetur ac</a>
            <a href="#" className="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
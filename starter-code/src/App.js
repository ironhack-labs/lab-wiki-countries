import React, {Component} from 'react';
// import './App.css';
import Nav from './component/Nav.jsx';
import CountryList from './pages/CountryList.jsx';
import {  Route } from 'react-router-dom';
import CountryDetail from './pages/CountryDetail.jsx';
import countries from './countries.json';

class App extends Component {

  render() {
    const Colstyle = {
      'max-height': '80vh',
      overflow: 'scroll',
    };
    const ContainerCont = {
      'display': 'flex',
      'justify-content': 'center',
    }
    return (
      <div className="App">
        <Nav />
        <div style={ContainerCont}>
          <div className="container">
            <div className="row">
              <div className="col-5" style={Colstyle}>
                <div class="list-group">
                  {countries.map((country, index) => (
                    <CountryList
                      key={index}
                      cca3={country.cca3}
                      name={country.name.common}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Route path="/country-detail/:cca3" component={CountryDetail} />
        </div>
      </div>
    );
  }
}

export default App;

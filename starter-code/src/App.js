import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Country from './pages/Country';
import CountryDetail from './pages/Country-detail'
import countriesList from './countries.json';
import {Switch, Route} from 'react-router-dom';

class App extends Component {

  render (){

    const colStyle = {
      "max-height": "90vh",
      overflow: "scroll"
    }

    return (
      <div>
        <Nav />
        <div className="container">
          <div className="row">
            <div className="col-5" style={colStyle}>
              <div className="list-group">
                {countriesList.map((item, indexN)=>(
                  <Country
                      key = {indexN.toString()} 
                      name = {item.name.common}
                      cca3 = {item.cca3}
                  />
                ))}
                </div>
            </div>
          </div>
        </div>
        <Switch>
          <Route path = "/country-detail/:cca3" component = {CountryDetail}/>
        </Switch>
      </div>
    );
  }
}

export default App;

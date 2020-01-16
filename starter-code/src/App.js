import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';

import countries from './countries.json';

import { Switch,Route,Link } from 'react-router-dom';

import Home from './components/Home.jsx';
import CountryDetail from './components/CountryDetail.jsx';
import Country from './components/Country.jsx';

class App extends Component {

  constructor(props){
    super(props);
    // for being able to create the links we need to associate each name
    // in the borders array list with a cca3
    // so each element in borders is to be replaced by {cca3:,name:}
    this.state={countries:countries};
    this._getCountryData=this._getCountryData.bind(this);
    this._getCountryName=this._getCountryName.bind(this);
  }
  _getCountryName(cca3){
    let countryIndex=this.state.countries.length;
    while(--countryIndex>=0)
      if(this.state.countries[countryIndex].cca3===cca3)
        return this.state.countries[countryIndex].name.official;
    return null;
  }
  _getCountryData(cca3){
    let countryIndex=this.state.countries.length;
    console.log("Obtaining country with cca3 '"+cca3+"' from "+countryIndex+"countries.");
    while(--countryIndex>=0)
      if(this.state.countries[countryIndex].cca3===cca3)
        return this.state.countries[countryIndex];
    console.error(`Country ${cca3} NOT found!`);
    return null;
  }
  render(){
    let style={"max-height":'90vh','overflow':'scroll'};
    return (
      <div className="App">
        <h1>Wiki countries</h1>
        <div class="container">
          <div class="row">
            <div class="col-5" style={style}>
              <div class="list-group">
                {this.state.countries.map((country,index)=>{
                  return(<Link className="list-group-item list-group-item-action" to={"/country/"+country.cca3} key={index}>{country.flag} {country.name.official}</Link>)
                  // replacing: return(<Country cca3={country.cca3} flag={country.flag} name={country.name.official} key={index.toString()}></Country>);
                })}
              </div>
            </div>
            <div class="col-7">
              <Switch>
                <Route path='/' exact component={Home}/>
                {/* for every country requested the cca3 is to be provided */}
                {/* instead of component use render */}
                <Route 
                  path='/country/:cca3' /*exact*/
                  render={(props) => {
                      console.log("Rendering country details: ",props);
                      return(<CountryDetail {...props} getData={this._getCountryData} getName={this._getCountryName} />);
                    }
                  }
                  />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;

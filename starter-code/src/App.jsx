import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CountryDetail from './components/CountryDetail/CountryDetail';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
useParams
} from "react-router-dom";


class App extends Component {
constructor() {
  super();
  this.state = {
    countries: []
  }
}

componentDidMount() {
  fetch('https://raw.githubusercontent.com/mledoze/countries/master/countries.json')
  .then(results => {return results.json() 
  }).then(data => {
    console.log('after mount');
    this.setState({countries: data})
  });
}

  render() {
    
    const countries = this.state.countries;
    return (
      <BrowserRouter>
      <div className="App">
      <header className="App-header">
       <Navbar />
      </header>
      <div className='d-flex w-100'>
        <div className='w-20 ml-0'>
          <h2 className='pl-5 pt-2 pb-2'>Country List</h2>
          <ul>
         {countries && ( countries.map(country => {
           return <li className = 'list-group-item list-group-item-action' key={country.cca3}> <img src={`https://www.countryflags.io/${country.cca2}/flat/64.png`} alt={country.cca3}/><Link to={`/${country.cca3}`}>{country.name.official}</Link></li>
         })
           )}
           </ul>
</div>
        <div className='w-60'>
         <Switch>
         <Route path="/:id" render={routeProps => ( <CountryDetail {...routeProps} countries={this.state.countries} />
      )}
    />
          </Switch>
        </div>

      </div>
    </div>

    </BrowserRouter>
    )
  }
}

export default App


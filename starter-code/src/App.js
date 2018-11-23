import React, { Component } from 'react';
import Router  from './Router';
import axios   from 'axios';
import NavBar  from './components/NavBar';
import Country from './components/Country';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    }
  }

  componentWillMount() {
    let {countries} = this.state;
    axios.get(`https://raw.githubusercontent.com/mledoze/countries/master/countries.json`)
         .then(res => {
          [...countries] = res.data;
          this.setState({countries});
         });
  }

  render() {
    const {countries} = this.state;

    return (
      <div>
        <NavBar />
        <main className="container">
          <div className="row">
            <div className="col-5 countries-col">
              <div className="list-group">
                {countries
                  .sort( (a,b) => a.name.common > b.name.common ? 1 : -1)
                  .map( (country, index) => (
                    <Country
                      key={index}
                      cca3={country.cca3}
                      name={country.name.common}
                      flag={country.flag}
                    />
                ))}
              </div>
            </div>
            <Router data={countries} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
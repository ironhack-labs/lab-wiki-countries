import React from 'react';
import './App.css';
import Countries from './data/countries.json'
import CountryList from './components/CountryList';
import { Switch, Route, Redirect } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';

const findDetails = props => {
  console.log(Countries.find(c => c.cca3 === props.match.params.id))
  return(Countries.find(c => c.cca3 === props.match.params.id))
}

function App() {
  return (
    <div className="App">
      <div className="countries">
        {Countries.map((country, i) => (
            <CountryList name={country.name.official} id={country.cca3} flag={country.flag} key={i} />
        ))}
      </div>

      <div className="countries-detail">
        <Switch>
          <Route exact path='/:id' component={(props) => <CountryDetails country={findDetails(props)} />} />
          {/* IN CASE IT THROWS ERROR */}
          <Redirect to="/" />

        </Switch>

      </div>
    </div>
  );
}

export default App;

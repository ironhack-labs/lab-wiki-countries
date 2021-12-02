import './App.css';
import Navbar from './Components/Navbar';
import CountriesList from './Components/CountriesList';
import CountryDetails from './Components/CountryDetails';

import { Switch, Route } from 'react-router-dom';
import CountriesApi from './countries.json';

function takeCountry(params) {
  let result = CountriesApi.filter((elm) => elm.name.official === params);

  return result;
}

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <div
            className="col-5"
            style={{ maxHeight: '90vh', overflow: 'scroll' }}
          >
            <CountriesList />
          </div>
          <Switch>
            <Route
              path={`/countrie-details/:id`}
              render={(props) => (
                <CountryDetails
                  {...props}
                  country={takeCountry(props.match.params.name.official)}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;

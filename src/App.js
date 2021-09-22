import { Switch, Route } from 'react-router';
import CountriesList from './components/CountriesList/CountriesList';
import Navbar from './components/Navbar/NavBar';
import CountryDetails from './components/CountryDetails/CountryDetails'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList/>
          <Switch>
            <Route
              path="/:cca3"
              render={(props) => <CountryDetails {...props} />}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;

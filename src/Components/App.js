
import './App.css';
import NavBar from './NavBar';
import CountriesList from './CountriesList';
import CountryDetails from './CountryDetails';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <div className="container">
          <div className="row">
            <Route path="/" render={() => <CountriesList />} />

            <Switch>

              <Route path="/:cca3" render={props => <CountryDetails {...props} />} />

            </Switch>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

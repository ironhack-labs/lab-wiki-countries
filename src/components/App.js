import './../styles/App.css';
import Navbar from './Navbar';
import CountryList from './CountriesList';
import { Switch, Route } from 'react-router-dom'
import CountriesDetails from './CountriesDetails';


function App() {
  return (

    <>
      <Navbar />

      <div className="container">
        <Switch>
          <Route path="/" render={() => <CountryList />} />
          <Route path="/country/:cca3" render={props => <CountriesDetails {...props} />} />
        </Switch>
      </div>

    </>

  );
}

export default App;

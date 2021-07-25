import Navbar from './component/Navbar';
import CountriesList from './component/CountriesList';
import CountryDetails from './component/CountryDetails';
import { Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <div className="d-flex">
        <CountriesList/>
        <Switch>
          <Route path="/countrydetails/:code" component={CountryDetails} />
        </Switch>
      </div>
    </div>
  );
}

export default App;

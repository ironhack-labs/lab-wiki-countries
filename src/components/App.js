import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import MyNavbar from './Navbar'
import CountriesList from './CountriesList';
import CountryDetails from './CountryDetails';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';


function App() {
  return (
    <>
      <MyNavbar />

      <Switch>
        <Route path='/' exact render={() => <Home />} />
        <Route path='/country' exact render={() => <CountriesList />} />
        <Route path='/country/:cca3' render={(props) => <CountryDetails {...props} />} />
      </Switch>




    </>
  );
}

export default App;

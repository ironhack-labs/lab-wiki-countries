import { Switch, Route } from 'react-router-dom';

// import CountryDetails from './components/countryDetails/CountryDetails'

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
// import Template from './components/template/Template';
import Navbar from './components/navBar/Navbar'
import MainPage from './pages';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route path="/:countryCode" component={MainPage}/>
      </Switch>
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';


function App() {
  return (
    <BrowserRouter>
    <nav>
      <Navbar />
      <Link to="/">Country List</Link>
    </nav>
      <Switch>
        <Route path="/" component={CountriesList} exact />
        <Route path="/country/:cca3" component={CountryDetails} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

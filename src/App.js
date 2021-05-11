import logo from './logo.svg';
import './App.css';
import Countries from './countries.json';
import { Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import CountriesDetails from './components/CountriesDetails/CountriesDetails';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={CountriesList} />
        <Route exact path="/:cca3" component={CountriesDetails} />      
      </Switch>
    </div>
  );
}

export default App;

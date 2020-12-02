import './App.css';
import NavBar from './navbar/Navbar'
import CountriesList from './countriesList/CountriesList'
import CountriesDetails from '../CountriesDetails'
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <>
      <NavBar />
      <CountriesList />
      <Switch>
        <Route path="/:cca3" render={props => <CountriesDetails {...props} />}/>
      </Switch>
      </>
  );
}

export default App;

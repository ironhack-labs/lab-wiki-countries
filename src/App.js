import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar'
import {Switch, Route} from 'react-router-dom'
import CountriesList from './Components/CountriesList'
import CountryDetails from './Components/CountryDetails'

function App() {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route
          path="/countries/:cca3"
          render={(historyProps) => {
            return <CountryDetails {...historyProps} />;
          }}
        />
      </Switch>
      <CountriesList />
    </div>
  );
}

export default App;

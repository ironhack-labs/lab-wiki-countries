import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar.jsx'
import CountriesList from './Components/CountriesList.jsx'
import { Switch, Route } from 'react-router-dom';
import CountryDetails from './Components/CountryDetails.jsx'
import countriesJSON from './countries.json'




function App() {
  return (
    <div className="App">

      <NavBar/>
      <CountriesList/>
      <Switch>
        <Route path="/countries/:cca3"
        render={(historyProps) => {
          return <CountryDetails {...historyProps}/>
          
        }}
        
        ></Route>
      </Switch>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {Switch, Route} from "react-router-dom";
import CountriesList from './Components/CountriesList';
import CountryDetails from './Components/CountryDetails';

function App() {


  

  return (
    <div className="App">
    <Navbar/>
    <CountriesList/>

    <Switch>
      <Route
      path='/countries/:cca3name'
      render={(props) => {
        return <CountryDetails {...props}/>;
      }}
      />
    </Switch>

    </div>
  );
}

export default App;

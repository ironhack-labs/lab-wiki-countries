
import './App.css';
import {Route, Switch} from "react-router-dom"
import NavBar from './Components/NavBar';
import CountryList from './Components/CountryList'
import CountryDetails from './Components/CountryDetails'

function App() {
  return (
    <div className="App">
  <NavBar/>
  <Switch>
    <Route exact path ="/"component={CountryList}/>
    <Route exact path="/:cca3" component={CountryDetails} />
  </Switch>
    </div>
  );
}

export default App;

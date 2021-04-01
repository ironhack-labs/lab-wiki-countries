
import './App.css';
import Navbar from './components/Navbar/Navbar'
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails'
import NotFound from './components/NotFound'
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <div className="row">
          <div className="col-5" style={{maxHeight: 700, overflow: "scroll"}}>
            <CountriesList/>
          </div>
          <div className="col-7" >
            <Switch>
              <Route exact path="/:cca3" component={CountryDetails} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;

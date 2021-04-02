import { Route, Switch } from "react-router-dom";

import './App.css';
//components

import Navbar from './components/Navbar/Navbar'
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails'

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/> 
      </header>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-5" style={{maxHeight: 700, overflow: "scroll"}}>
              <CountriesList/>
            </div>
            <div className="col-7" >
              <Switch>
                <Route exact path="/:cca3" component={CountryDetails} />
              </Switch>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App;

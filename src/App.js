
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <Navbar />
        </div>
        <div className="row">
          <div className="col">
            <CountriesList />
          </div>
          <div className="col">
           <Switch>
            <Route path="/country/:cca3" children={<CountryDetails />} />
           </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

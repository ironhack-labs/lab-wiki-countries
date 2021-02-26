import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Countries from './components/Countries';
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Countries />
        <Switch>
          <Route exact path="/countries/:country" component={CountryDetails} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import CountriesList from './components/countries-list/CountriesList';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/countries" component={CountriesList} />
        <Switch>
          <Route exact path='/countries/:id'></Route>
        </Switch>
    </div>
  );
}

export default App;

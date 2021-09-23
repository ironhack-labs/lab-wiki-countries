
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList'
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
  
      <Navbar />
      <Switch>


        <Route exact path="/Countries" render={() => <CountriesList />} />

      </Switch>
    </div>
  );
}

export default App;

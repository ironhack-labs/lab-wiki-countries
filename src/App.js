import './App.css';
import NavBar from './components/Navbar'
import CountriesList from './components/CountriesList'
import { Switch, Route } from "react-router-dom";
import CountryDetail from './components/CountryDetail';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <CountriesList />
      <Switch>
        <Route 
          path="/countries/:cca3"
          render={(historyProps) => {
            return <CountryDetail {...historyProps}/>
          }}
        />
      </Switch>
    </div>
  );
}

export default App;

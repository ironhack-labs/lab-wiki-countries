import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import CountriesList from "./components/CountriesList/CountriesList";
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/' component={CountriesList} />
      </Switch>
    </div>
  );
}

export default App;

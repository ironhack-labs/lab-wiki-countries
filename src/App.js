import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={CountriesList}/>
        </Switch>
        <Switch>
          <Route exact path="/:pais" component={CountriesList}/>
        </Switch>
        {/* <Switch>
        <Route path="*" component={() => <div>404</div> }/>
        </Switch> */}
      </Router>
    </div>
  );
}
export default App;

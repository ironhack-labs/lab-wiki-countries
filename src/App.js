import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import Home from './Home.js';
import Countries from './Countries.js';
import Details from './Details.js';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/countries" component={Countries} />
        <Route exact path="/details" component={Details} />
        {/* <Route exact path="/projects/:id" component={ProjectDetail} /> */}
      </Switch>
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <CountryList />
        <Switch>
          {/* The route takes some props. Path is the place where the user vists.
        The component is a reference to the component that should be rendered when on this page */}
          {/* If we don't add the 'exact' keyword, react-router-dom will take the first partial match it encounters */}
          <Route path="/country/:id" component={CountryDetails} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

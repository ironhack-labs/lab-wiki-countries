import './App.css';
import React from 'react';
import CountriesList from './components/CountriesList';
import { Switch, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import Home from './components/Home';
import Navbar from './components/Navbar';
import axios from 'axios';

function App() {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          'https://ih-countries-api.herokuapp.com/countries'
        );
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          <Navbar />
          <div className="body">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/countries"
                render={(props) => (
                  <CountriesList {...props} data={data} />
                )}
              />
              <Route path="/countries/:id">
                <CountryDetails />
              </Route>
            </Switch>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

import './App.css';
import Navigation from './Navbar'
import CountriesList from './CountriesList'
import CountriesDetails from './CountryDetails'
import { Switch, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Navigation />
      <main>
        < div className='container' >
          <div className='row'>
            <CountriesList />
            <Switch>
              <Route path='/:cca3' render={props => <CountriesDetails {...props} />} />
            </Switch>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;

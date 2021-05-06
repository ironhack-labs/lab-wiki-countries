import './App.css';
import NavBar from './Navbar'
import CountriesList from './CountriesList'
import { Switch, Route, Link } from 'react-router-dom'
import CountryDetails from './CountryDetails'


const App = () => {

  return (

    <>
      <NavBar />

      <div>
        <div className='container'>
          <div className='row'>

            <CountriesList />

            <Switch>
              <Route exact path='/:cca3' render={props => <CountryDetails {...props} />} />
            </Switch>

          </div>
        </div>
      </div>
    </>

  );
}

export default App;

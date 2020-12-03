import './App.css';
import Navbar from './Navbar'
import CountriesList from './CountriesList'
import CountryDetails from './CountriesDetails'
import { Switch, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Navbar />

      <div className='container'>
        <main>
          <div className='row'>
            <div className='col-md-5 countries-list'>
              <CountriesList />
            </div>
            <div className='col-md-7'>
              <Switch>
                <Route path='/details' render={props => <CountryDetails {...props} />} />
              </Switch>
            </div>
          </div>
        </main>
      </div>

    </>
  )
}

export default App;

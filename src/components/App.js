import './App.css'
import CountriesList from './CountriesList'
import Navbar from './Navbar'
import { Route } from 'react-router-dom'
import CountryDetails from './CountryDetails'



function App() {
  return (
    <>


      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <CountriesList />
            <Route path="/:cca3" render={props => <CountryDetails {...props} />} />

          </div>
        </div>
      </div>



    </>
  )
}

export default App;

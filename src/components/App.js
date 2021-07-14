import './App.css'
import CountriesList from './CountriesList'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './Navbar'
import countries from './../countries.json'




function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">

            <CountriesList countries={countries} />

          </div>
        </div>
      </div>
    </>
  )
}

export default App

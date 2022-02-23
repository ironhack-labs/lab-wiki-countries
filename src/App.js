import './App.css'
import { Navbar } from "./components/Navbar"
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import { Routes, Route } from 'react-router-dom'
import countries from './countries.json'


function App() {
  //const [countries, setCountries] = useState()
  //   useEffect(() => {
  //     setCountries()
  //     const url = `https://ih-countries-api.herokuapp.com/countries`
  //     fetch(url).then(resp => resp.json()).then(data => {
  //       setCountries({ data })
  //     })
  //   }, [])

  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <div className='row'>
          <CountriesList countries={countries} />

          <Routes>

            <Route path='/:alpha3Code' element={<CountryDetails theCountries={countries} />} />

          </Routes>

        </div>

      </div>

    </div>
  )
}

export default App

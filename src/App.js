import Navbar from './components/Navbar.js'
import './components/Navbar.css'
import CountriesList from './components/CountriesList'


const App = () => {
  return (
    <>
      <Navbar />
      <div>
        <CountriesList />

      </div>
    </>
  )
}

export default App;

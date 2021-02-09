import './App.css';
import Navbar from './Components/Navbar'
import CountriesList from './Components/CountriesList'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <CountriesList />
      </div>

    </div>
  );
}

export default App;

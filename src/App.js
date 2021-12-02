
import './App.css';
import Navbar from './components/navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';

function App() {
  return (
    <div>
      <header>
        <Navbar/>
        <CountriesList/>
      </header>
    </div>
  );
}

export default App;

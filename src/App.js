
import './App.css';
import CountriesList from './Components/CountriesList/CountriesList';
import NavBar from './Components/NavBar/NavBar';
import conutriesList from './countries.json';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <CountriesList list={conutriesList} />
      </div>
    </div>
  );
}

export default App;

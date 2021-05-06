// import logo from './logo.svg';
// import './App.css';
import CountriesList from './CountriesList'
import Navbar from './Navbar'

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <div className='container'>
        <div className='row'>
          <CountriesList/>
        </div>
      </div>
      
    </div>
  );
}

export default App;

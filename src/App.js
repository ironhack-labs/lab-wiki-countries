
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Switch, Route} from 'react-router-dom';
import CountriesList from './components/CountriesList/CountriesList';


function App() {

  return (

    <div className="App">
      <Navbar/>
      <CountriesList /> 
      
    </div>

  );
}

export default App;

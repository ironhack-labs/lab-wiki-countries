import './App.css';
import Navbar from './Navbar';
import MainContent from './MainContent';
import countries from '../countries.json';

function App() {
  return (
    <>
      <Navbar />
      <MainContent countries={countries} />
    </>
  );
}

export default App;

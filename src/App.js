import CountryList from './components/Sidebar/CountryList';
import Router from './components/Router/Router';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div>
        <CountryList/>
      </div>
      <div>
        <Router />
      </div>
    </div>
  );
}

export default App;
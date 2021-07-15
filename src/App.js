import './App.css';
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';

function App() {
  return (
    <>
    <Navbar />

    <div className="container">
      <div className="row">
        <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
          <div className="list-group">
            <CountriesList />
            {/* <a className="list-group-item list-group-item-action" href="/ABW"
              >🇦🇼 Aruba</a>
            <a className="list-group-item list-group-item-action" href="/AFG"
              >🇦🇫 Afghanistan</a> */}
            </div>
        </div>

        <div className="col-7">
        Country details
          <Route path = {'/country/:code'} component = {CountryDetails} />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;

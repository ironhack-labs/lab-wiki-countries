
import './App.css';
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'

function App() {

  render = () => (

    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <CountriesList countries={this.state.countries} />

        </div>
      </div>
    </div>
  );
}

export default App;

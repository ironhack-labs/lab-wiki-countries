import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';


function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="row mt-5">
                <div className="col-4">
                    <CountriesList/>
                </div>
            </div>
        </div>
    );
}

export default App;

import React from 'react';
import './App.css';
import CountryDetail from './components/CountryDetail';
import Countries from './countries.json';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';


const countryAll = Countries;

function App() {
    console.log(countryAll);
    return (
        <div id="App">
            <nav className="navbar navbar-dark bg-primary mb-3">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        WikiCountries
                    </a>
                </div>
            </nav>
            <div className="row">
                <div style={{ 'maxHeight': '90vh', overflow: 'scroll' }} className="col-5">
                    <table className="table">
                        <tbody>
                            {countryAll.map(x => {
                                //   `x` is the element in the array
                                return (
                                    <tr>
                                        {/*Via linket vælger vi dets id */}

                                        <td>
                                            <Link to={`/projects/${x.cca3}`}>{x.name.official} </Link>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <Route path="/projects/:id" component={CountryDetail} />
        </div>
            
      </div>
      
    );
}

export default App;

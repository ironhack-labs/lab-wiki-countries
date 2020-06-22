import React, { Component } from 'react'
import './App.css';
import CountriesList from './components/CountriesList.jsx';
import CountryDetail from './components/CountryDetail.jsx';
import { Route } from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <div className="App">
                <nav className="navbar navbar-dark bg-primary mb-3">
                    <div className="container">
                        <a className="navbar-brand" href="/">WikiCountries</a>
                    </div>
               </nav>
               <div className="container">
                    <div className="row">
                        <div className="col-5 countries-styling">
                            <Route path="/" component={CountriesList}/>
                        </div>
                        <div className="col-7">
                            <Route path="/country/:id" component={CountryDetail}/>
                        </div>
                    </div>
                </div>        
            </div>
        )
    }
}

export default App;


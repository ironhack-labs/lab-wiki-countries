import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './components/Header/Header';
import CountryList from './components/CountryList/CountryList';
import CountryDetail from './components/CountryList/CountryDetail/CountryDetail';

import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import countries from './countries.json';

class App extends React.Component {

    state={
        countries: countries.slice(),
        selectedId: "",
        selectedCountry: null
    };

    selectCountry = (id) => {

        const country = [...this.state.countries].find(country => {
            return country.cca3 === id;
        });

        this.setState({
            selectedId: id,
            selectedCountry: country
        });
    };

    render() {

        const { countries } = this.state;
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <div className="row main-content">
                        <div className="col-12 col-md-4 list-wrapper">
                            <CountryList list={ countries } selectCountry={ this.selectCountry }/>
                        </div>
                        <div className="col-12 col-md-8">
                            <Route  path='/countries/:id' render={ () => CountryDetail(this.state.selectedCountry) }/>
                        </div>
                    </div>
                </div>
            </div>
    );
    }
}

ReactDOM.render((
    <BrowserRouter>
    <App />
    </BrowserRouter>
),
    document.getElementById('root')
);
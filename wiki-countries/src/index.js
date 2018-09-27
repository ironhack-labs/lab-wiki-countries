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
        selectedId: countries[0].cca3,
        selectedCountry: {...countries[0]}
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
        const country = {...this.state.selectedCountry };


        if(country.borders) {
            country.borders = country.borders.map( b => {
                return [b, this.state.countries.find(c => c.cca3 === b).name.common];
            });
        }


        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <div className="row main-content">
                        <div className="col-12 col-md-4 list-wrapper">
                            <CountryList list={ countries } selectCountry={ this.selectCountry }/>
                        </div>
                        <div className="col-12 col-md-8">
                            <Route  path='/countries/:id' render={ () =>  <CountryDetail country={ country } select={ this.selectCountry } /> }/>
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
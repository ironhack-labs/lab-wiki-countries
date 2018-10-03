import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, NavLink, Link, Route } from 'react-router-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import countries from './countries.json';

class CountryDetail extends React.Component {
    render() {
        const { cca3 } = this.props.match.params;
        const country = countries.filter(e => e.cca3 === cca3)[0];
        // console.log(country.borders)
        return (
            <div>
                <div className='row container'>
                    <div className='col-10 d-flex justify-content-start border-bottom my-3'>
                        <h1>{country.name.common}</h1>
                    </div>
                    <div className='col-10 d-flex justify-content-between border-bottom my-3'>
                        <h3>Capital</h3>
                        <h3>{country.capital[0]}</h3>
                    </div>
                    <div className='col-10 d-flex justify-content-between border-bottom my-3'>
                        <h3>Area</h3>
                        <h3>{country.area} km<sup>2</sup></h3>
                    </div>
                    <div className='col-10 d-flex justify-content-between my-3 row'>
                        <div className="col-6">
                            <h3>Borders</h3>
                        </div>
                        <div className="col-6">
                            {country.borders.map(c => <Link className='btn my-1 col-12' to={`/${c}`} key={`${c}a`}>{c}</Link>)}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

class CountryCard extends React.Component {
    render() {
        let { cca3, flag, name: { common } } = this.props.country;
        return (
            <div>
                <NavLink className='btn my-1 col-12 d-flex justify-content-start' to={`/${cca3}`} activeClassName="btn-info" key={cca3}>{flag} {common}</NavLink>
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        const countriesList = countries;
        return (
            <div className='App container'>
                <div className='row my-5'>
                    <div className="col-md-6 countries">
                        {countriesList.map(e => <CountryCard country={e} key={e.cca3}></CountryCard>)}
                    </div>
                    <div className='col-md-6'>
                        <Route path='/:cca3' component={CountryDetail} />
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
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, NavLink, Link, Route } from 'react-router-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import countries from './countries.json';

class Countrydetail extends React.Component {


    render() {
        const { cca3 } = this.props;
        return (
            <div>
                <h2>{{}}</h2>
            </div>
        )
    }
}

class CountryCard extends React.Component {
    render() {
        let { cca3, flag, name: { common } } = this.props.country;
        let route = `/${cca3}`
        return (
            <div>
                <NavLink className='btn my-1 col-12 d-flex justify-content-start' to={route} activeClassName="btn-info" key={cca3}>{flag} {common}</NavLink>
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
                    {countriesList.map(e => <Route exact path='/:cca3' Component='' key={e.cca3}></Route>)}
                    <div className="col-md-6 countries">
                        {countriesList.map(e => <CountryCard country={e} key={e.cca3}></CountryCard>)}
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
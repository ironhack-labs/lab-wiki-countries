import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header/Header';
import CountryList from './components/CountryList/CountryList';
import CountryDetail from './components/CountryList/CountryDetail/CountryDetail';

import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import countries from './countries.json';

class App extends React.Component {

    state={
      countries: countries.slice()
    };

    render() {

        const { countries } = this.state;
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <div className="row main-content">
                        <div className="col-12 col-md-4 list-wrapper">
                            <CountryList list={ countries }/>
                        </div>
                        <div className="col-12 col-md-8">
                            <CountryDetail />
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
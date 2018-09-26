import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header/Header';

import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

class App extends React.Component {
    render() {
        return (
            <div>
            <Header />
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
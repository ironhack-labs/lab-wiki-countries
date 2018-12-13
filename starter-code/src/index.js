import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'   
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom'


const WithRouter = () => (
    <Router>
        <App />
    </Router>
)

ReactDOM.render(<WithRouter />, document.getElementById('root'));

serviceWorker.unregister();

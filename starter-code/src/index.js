import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from 'react-router-dom';
import Menu from './components/Menu';
import Details from './components/Details';
import "bootstrap/dist/css/bootstrap.css";



ReactDOM.render(
	<BrowserRouter>
		<Route path='/' component={Menu} />
        <Route path='/country/:cca3' component={Details} />
	</BrowserRouter>, 
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

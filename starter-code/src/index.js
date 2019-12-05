import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './components/Navbar';
import CountryDetail from './components/CountryDetail/CountryDetail';

ReactDOM.render(
	<BrowserRouter>
		<Nav />
		<div className='App'>
			<div className='row'>
				<div className='col-5'>
					<Route path='/' component={App} />
				</div>
				<div className='col-7'>
					<Route path='/country/:cca3' component={CountryDetail} />
				</div>
			</div>
		</div>
	</BrowserRouter>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

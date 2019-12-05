import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from 'react-router-dom'
import Menu from './components/Menu'
import Details from './components/Details'


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




// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as PepeRouter } from 'react-router-dom';

ReactDOM.render(
  <PepeRouter>
    <App />
  </PepeRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();

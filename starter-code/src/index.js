import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router} from 'react-router-dom'
import 'semantic-ui/dist/semantic.min.css'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <Router>
    <App />
  </Router>
, document.getElementById('root'));


serviceWorker.unregister();

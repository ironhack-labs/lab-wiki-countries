import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'antd/dist/antd.css'

//1.- treamos el tipo d erouter que queremos
import {BrowserRouter} from 'react-router-dom'

//3.-sustituimos el componente
ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));



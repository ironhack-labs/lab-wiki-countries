import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import {BrowserRouter} from 'react-router-dom'
import Routes from './Routes'


//const WithRouter = () =><BrowserRouter><App/></BrowserRouter>

class Oxe extends React.Component{
    render(){
        return(
            <div>
                <App/>
                <Routes/>
            </div>
        )
    }
};



ReactDOM.render((<BrowserRouter><Oxe/></BrowserRouter>), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

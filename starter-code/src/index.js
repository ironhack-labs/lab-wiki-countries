import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UIkit from "uikit";
import "uikit/dist/css/uikit.min.css";
import Icons from "uikit/dist/js/uikit-icons";
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";

UIkit.use(Icons);

const WithRouter = () => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);


ReactDOM.render(<WithRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

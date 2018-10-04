import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById("root")
);

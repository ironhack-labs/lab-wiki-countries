import React from "react";
import { Country } from './components/Country'
import './app.css';


export class App extends React.Component {


	render() {
		return (
			<section className="container">
				<div className="row">
					<header className="header">
						<h5 className="title">WikiCountries</h5>
					</header>
				</div>
				<Country />
			</section>
		)
	}
}
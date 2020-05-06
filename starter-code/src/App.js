import React, { Component } from 'react'
import './App.css'
import { Link, Route, Switch } from 'react-router-dom'

import countries from './countries.json'
import CountryDetails from './countrydets/CountryDetail'

class App extends Component {
	constructor() {
		super()
		this.myCountries = [...countries]
		this.state = { countries: this.myCountries }
	}

	render() {
		return (
			<>
				<nav className='navbar navbar-dark bg-primary'>

					<a className='navbar-brand' href='/'>
							WikiCountries
						</a>
				</nav>

				<div className='container'>
					<div className='row'>
						<div className='col-md-4' style={{ maxHeight: '70vh', overflow: 'scroll' }}>
							<ul className='list-group'>
								{this.state.countries.map((elm, idx) => (
									<Link className='list-group-item list-group-item-action' key={idx} to={elm.cca3}>
										{elm.flag + ' ' + elm.name.common}
									</Link>
								))}
							</ul>
						</div>

						<Switch>
							<Route path='/:cca3' render={(props) => <CountryDetails {...props} />} />
						</Switch>
					</div>
				</div>
			</>
		)
	}
}

export default App

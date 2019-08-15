import React, { Component } from 'react'
import './App.css'

import Nav from './components/Nav'
import CountryDetail from './components/CountryDetail'
import allCountries from './countries.json'
import { Switch, Route, Link } from 'react-router-dom'

class App extends Component {
	constructor() {
		super()
		this.state = {
			countries: allCountries
		}
	}
	render() {
		return (
			<div className='App'>
				<Nav />
				<div className='container'>
					<div className='row'>
						<div className='col-5 list'>
							<div className='list-group'>
								{this.state.countries.map((elm, idx) => {
									return (
										<Link to={elm.cca3} key={idx} className='list-group-item list-group-item-action'>
											{elm.flag}
											{elm.name.official}
										</Link>
									)
								})}
							</div>
						</div>
						<div className='col-7'>
							<Switch>
								<Route exact path='/:id' component={CountryDetail} />
							</Switch>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default App

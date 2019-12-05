import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import countries from '../countries.json'

export default class Menu extends Component {
	state = {
		countries
	}

	render(){
		const { countries } = this.state
		return(
			<div
			style={{
				width: '26vw',
				height: '100vh',
				overflow: 'scroll'
				}}
			>

			{countries.map((country, i) => (
					<Link key={i} to={`/country/${country.cca3}`}>
						<p>{country.flag}{country.name.official}</p>
					</Link>
				))}

			</div>
		)
	}
}

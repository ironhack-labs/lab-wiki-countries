import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function HomePage() {

	const [countries, setCountries] = useState([])
    useEffect(() => {
		axios
			.get('https://ih-countries-api.herokuapp.com/countries').then(({ data }) => setCountries(data))
			
	}, [])

	return (
		<div className='HomePage'>
			<h1>"WikiCountries: Your Guide to the World"</h1>
			<div className='container' style={{ maxHeight: '1000px', overflow: 'scroll' }}>
				<div className='list-group'>
					{countries.map(({ alpha2Code, name, alpha3Code }) => {
						return (
							<Link
								to={`/${alpha3Code}`}
								key={alpha2Code}
								className='list-group-item list-group-item-action'>
								<img
									src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`}
									alt=''
								/>
								{name.common}
							</Link>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default HomePage

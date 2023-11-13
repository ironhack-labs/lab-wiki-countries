import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function CountryDetails() {
	const { alpha3Code } = useParams();
	const [singleCountry, setSingleCountry] = useState(null);

	useEffect(() => {
		axios
			.get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
			.then((response) => {
				setSingleCountry(response.data);
			})
			.catch((error) => {
				console.log('Error getting country details from the API...');
				console.log(error);
			});
	}, [alpha3Code]);
	return (
		<div>
			<nav className="navbar navbar-dark bg-primary mb-3">
				<div className="container">
					<a className="navbar-brand" href="/">
						WikiCountries
					</a>
				</div>
			</nav>
			<div className="container">
				<p>Country Details</p>
				{singleCountry && (
					<>
						<img
							src={`https://flagpedia.net/data/flags/icon/72x54/${singleCountry.alpha2Code.toLowerCase()}.png`}
							alt="Nature"
						></img>
						<h1>{singleCountry.name.common}</h1>
						<table className="table">
							<thead></thead>
							<tbody>
								<tr>
									<td>{singleCountry.capital}</td>
								</tr>
								<tr>
									<td>
										{singleCountry.area} km<sup>2</sup>
									</td>
								</tr>
								<tr>
									<td>Borders</td>
									<td>
										<ul>
											{singleCountry.borders.map((borderObj, i) => {
												return (
													<Link key={i} to={`/countries/${borderObj}`}>
														<p>{borderObj}</p>
													</Link>
												);
											})}
										</ul>
									</td>
								</tr>
							</tbody>
						</table>
					</>
				)}
			</div>
		</div>
	);
}

export default CountryDetails;

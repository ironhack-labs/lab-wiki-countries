import { Link } from 'react-router-dom';

function HomePage({ countriesArr }) {
	return (
		<div className="homepage">
			{
				<div>
					<nav className="navbar navbar-dark bg-primary mb-3">
						<div className="container">
							<a className="navbar-brand" href="/">
								WikiCountries
							</a>
						</div>
					</nav>
					<div className="container">
						<h1>WikiCountries: Your Guide to the World</h1>

						{countriesArr.map((countryObj, i) => {
							return (
								<div className="list-group" key={i}>
									<Link
										className="list-group-item list-group-item-action"
										to={`/countries/${countryObj.alpha3Code}`}
									>
										<>
											<img
												src={`https://flagpedia.net/data/flags/icon/72x54/${countryObj.alpha2Code.toLowerCase()}.png`}
												alt="Nature"
											></img>
											<br />
											{countryObj.name.common}
										</>
									</Link>
								</div>
							);
						})}
					</div>
				</div>
			}
		</div>
	);
}

export default HomePage;

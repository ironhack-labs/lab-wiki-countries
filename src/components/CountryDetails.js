function CountryDetails() {
	return (
		<div class="col-7">
			<img src="https://restcountries.eu/data/fra.svg" alt="country flag" className="countryDetailsImg" />
			<h1>France</h1>
			<table class="table">
				<thead />
				<tbody>
					<tr>
						<td className="countryDetailTd">Capital</td>
						<td>Paris</td>
					</tr>
					<tr>
						<td>Area</td>
						<td>
							551695 km <sup>2</sup>
						</td>
					</tr>
					<tr>
						<td>Borders</td>
						<td>
							<ul>
								<li>
									<a href="/AND">Andorra</a>
								</li>
								<li>
									<a href="/BEL">Belgium</a>
								</li>
								<li>
									<a href="/DEU">Germany</a>
								</li>
								<li>
									<a href="/ITA">Italy</a>
								</li>
								<li>
									<a href="/MCO">Monaco</a>
								</li>
								<li>
									<a href="/ESP">Spain</a>
								</li>
								<li>
									<a href="/CHE">Switzerland</a>
								</li>
							</ul>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default CountryDetails;
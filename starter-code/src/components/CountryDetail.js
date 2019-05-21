import React, { Component } from 'react';

class CountryDetail extends Component {
	render() {
		return (
			<div className="col-7">
				<h1>{this.props.country.name.common}</h1>
				<table className="table">
					<tbody>
						<tr>
							<td style={{ width: '30%' }}>Capital</td>
							<td>{this.props.country.capital}</td>
						</tr>
						<tr>
							<td>Area</td>
							<td>
								{this.props.country.area} km
								<sup>2</sup>
							</td>
						</tr>
						<tr>
							<td>Borders</td>
							<td>
								{/* <ul>
									{this.props.countries.border.map((neighboor) => {
										return (
											<li>
												<a href="/{neighboor}" />
											</li>
										);
									})}
								</ul> */}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default CountryDetail;

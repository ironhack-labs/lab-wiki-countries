import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
	render() {
		return (
			<div className="row">
				<div className="col-5">
					<div className="list-group">
						{this.props.countries.map((eachCountry, index) => {
							return (
								<div className="list-group-item list-group-item-action" key={eachCountry.id}>
									<Link to={`/${eachCountry.cca3}`}>{eachCountry.name.common}</Link>
									{eachCountry.flag}

									<hr />
								</div>
							);
						})};
					</div>
				</div>
			</div>
		);
	}
}

export default Sidebar;

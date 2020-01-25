import React from "react";
import { Link } from "react-router-dom";

const CountryItem = ( props ) => {
	return (
		<Link className="list-group-item list-group-item-action" to={props.countryCode}>
			{props.flag}
			<b> {props.countryName}</b>
		</Link>
	);
};

export default CountryItem;

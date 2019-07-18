import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

export default function CountryItem(props) {
	return (
		<Link className="list-group-item list-group-item-action" to={`/${props.country.cca3}`}>
			<span>{props.country.flag}</span>
			<span>{props.country.name.common}</span>
		</Link>
	);
}

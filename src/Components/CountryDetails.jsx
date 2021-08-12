import React from 'react';
import countriesJSON from "../countries.json";

const CountryDetails = (props) => {



	console.log("props match", props.match.params.mame);

	const oneCountry = countriesJSON.find((country) => {
		return country.name === Number(props.match.params.name);

	});

		


	console.log(oneCountry);
	
	


	return (
		<div>
			<h1> test</h1>
	
			
			
		</div>
	)
}

export default CountryDetails

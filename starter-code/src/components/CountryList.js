import React from "react";
import CountryItem from "./CountryItem";

const CountryList = ({ countries }) => {
	return (
		<div
			className="CountryList col-5 h-100"
			style={{ maxHeight: "90vh", overflow: "scroll" }}
		>
			<div className="list-group">
				{countries.map((country, i) => (
					<CountryItem
						key={i}
						countryName={country.name.common}
            flag={country.flag}
            countryCode={country.ccn3}
					/>
				))}
			</div>
		</div>
	);
};

export default CountryList;

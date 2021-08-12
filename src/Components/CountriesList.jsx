import { Link  } from "react-router-dom";
import countriesJSON from "../countries.json";
import React from 'react';



const CountriesList = (props) => {


	return (
		
		<div>
			
		
				<h1> Countries List </h1>
					
				{countriesJSON.map((country) => {
					
					return (
						
						<div>
							<ul>
								
									
								<li key={country.cca3}><Link to={"/countrydetail/" + country.cca3}> {country.flag} {country.name.common} 
									</Link>
								</li>
							
								
								
							</ul>
						</div>
					);
				})}
				

			
		</div>
	)
}

export default CountriesList

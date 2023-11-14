import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


function CountryDetails() {
    const { alpha3Code } = useParams();
	const [eCountry, seteCountry] = useState([]);

	useEffect(() => {
		axios
			.get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
			.then((response) => {
				seteCountry(response.data);
                
			})
			.catch((error) => {
				console.log('Error getting country details from the API...');
				console.log(error);
			});
	}, []);
    return(
        <div>
        <h2>Country Details</h2>
       
        {eCountry && (
					<>
					
						<h1>{eCountry.name.common}</h1>
						<table>
							<thead></thead>
							<tbody>
								<tr>
									<td>{eCountry.capital}</td>
								</tr>
								<tr>
									<td>
										{seteCountry.area} km<sup>2</sup>
									</td>
								</tr>
								<tr>
									<td>Borders</td>
									<td>
										<ul>
											{eCountry.borders.map((border, k) => {
												return (
													<Link key={k} to={`/countries/${border}`}>
														<p>{border}</p>
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
        
    )
}

 

export default CountryDetails;

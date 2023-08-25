import { useState, useEffect } from "react";
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'
import HomePage from "./HomePage";



function CountryDetails(){
    const {countryId} = useParams()
    const [country, setCountry] = useState("")
	const { name, capital, area, borders, alpha2Code} = country


    useEffect(() => {
		axios
			.get(`https:ih-countries-api.herokuapp.com/countries/${countryId}`).then(({ data }) => {
				setCountry(data)
			})
	}, [countryId])
    
	if (!country) {
        return (
            <div className='CountryDetails'>
				<h1>"Country Details"</h1>
				<p>...loading</p>
			</div>
		)
    }
    else{
        return (
			<div className='CountryDetails'>
				<div className='container'>
					<p style={{ fontSize: '25px', fontWeight: 'bold' }}>Country Details</p>

					<h1>{name.common}</h1>
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`} alt=''/>

					<table className='table'>
						<thead></thead>
						<tbody>
							<tr>
								<td style={{ width: '40%' }}>Capital</td>
								<td>{capital}</td>
							</tr>
							<tr>
								<td>Area</td>
								<td>
									{area} km
									<sup>2</sup>
								</td>
							</tr>
							<tr>
								<td>Borders</td>
								<td>
									{borders.map(eachBorder => {
										return (
											<p key={eachBorder}>
												<Link to={`/${eachBorder}`}>{eachBorder}</Link>
											</p>
										)
									})}
								</td>
							</tr>
						</tbody>
					</table>
                    </div>
			</div>
		)
	}
}

export default CountryDetails



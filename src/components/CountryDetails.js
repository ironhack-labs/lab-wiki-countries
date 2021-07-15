import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function CountryDetails(props) {

    const [countryDetail, updatedCountryDetail] = useState(null);
    const [bordersDetail, updatedBordersDetail] = useState([]);

    const getData = async () => {
        let code = props.match.params.code;
        let response = await axios.get(`https://restcountries.eu/rest/v2/alpha/${code}`);
        let country = {
            name: response.data.name,
            code: code,
            capital: response.data.capital,
            area: response.data.area,
            borders: response.data.borders
        }
        // finding bordering countries names
        let joinedCodes = country.borders.join(";");

        let responseList = await axios.get(`https://restcountries.eu/rest/v2/alpha?codes=${joinedCodes}`);
        let bordersList =  responseList.data.map((elem) => {
            return {
                name: elem.name,
                code: elem.alpha3Code
            }
        });

        updatedCountryDetail(country);
        updatedBordersDetail(bordersList)
    }
    useEffect(() => {
        let newCode = props.match.params.code;
        let stateCode = countryDetail ? countryDetail.code : null;
        console.log(newCode, stateCode)
        if (newCode !== stateCode){
            getData()
        }
    })

    

    if (!countryDetail){
        return <p>Loading country's details</p>
    }

    return (
        <div>
            <h3>{countryDetail.name}</h3>
            <p>Capital: {countryDetail.capital}</p>
            <p>Area: {countryDetail.area} km2</p>
            <div>
            {
                bordersDetail.map((borderCountry, i) => {
                    return <p key={i}>
                        <Link to = {`/country/${borderCountry.code}`}> {borderCountry.name}
                        </Link>
                    </p>
                })
            }

            
            </div>

        </div>
    )
}
export default CountryDetails;

// 0: {name: "Angola", code: "AGO"}
// 1: {name: "Botswana", code: "BWA"}
// 2: {name: "Congo (Democratic Republic of the)", code: "COD"}
// 3: {name: "Malawi", code: "MWI"}
// 4: {name: "Mozambique", code: "MOZ"}
// 5: {name: "Namibia", code: "NAM"}
// 6: {name: "Tanzania, United Republic of", code: "TZA"}
// 7: {name: "Zimbabwe", code: "ZWE"}
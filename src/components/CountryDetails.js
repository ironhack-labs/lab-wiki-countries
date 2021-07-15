import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function CountryDetails(props) {

    const [countryDetail, updatedCountryDetail] = useState(null);
    const [bordersDetail, updatedBordersDetail] = useState(null);

    const getData = async () => {
        let code = props.match.params.code;
        console.log(code)
        let response = await axios.get(`https://restcountries.eu/rest/v2/alpha/${code}`);
        let country = {
            name: response.data.name,
            code: code,
            capital: response.data.capital,
            area: response.data.area,
            borders: response.data.borders
        }
        // finding bordering countries names
        let str = "";
        let len = country.borders.length //3 
        for (let i = 0; i<len; i++ ) {
                 
            if (i === len -1){
                str += country.borders[i]
            }else{
                str = str + country.borders[i] + ";"
            }
        }
        let responseList = await axios.get(`https://restcountries.eu/rest/v2/alpha?codes=${str}`);
        let bordersList = [];
        for (let i=0; i< responseList.data; i++){

        }




        console.log(responseList.data)
        updatedCountryDetail(country)
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
                countryDetail.borders.map((borderCountry, i) => {
                    return <p key={i}>
                        <Link to = {`/country/${borderCountry}`}> {borderCountry}</Link>
                    </p>
                })
            }

            
            </div>

        </div>
    )
}
export default CountryDetails;
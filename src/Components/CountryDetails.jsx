import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'



function CountryDetails() {

    // const findCountry = countriesData.find((oneCountry) => {   
    //     return oneCountry.alpha3code === countryId;
    //   })

    const { country_id } = useParams()

    const [findCountry, setFindCountry] = useState({})

    useEffect(() => {
        axios
            .get(`https://ih-countries-api.herokuapp.com/countries/${country_id}`)
            .then((response) => {
                console.log(response.data)
                setFindCountry(response.data);
            })
    }, [country_id])  



    return (

        <div class="col-7">            
            <p>{findCountry.name.official}</p>
                 <img src={`https://flagpedia.net/data/flags/icon/72x54/${findCountry.alpha2Code.toLowerCase()}.png`} />
            <h1>{findCountry.name.official}</h1>
            <table class="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td>Capital</td>
                        <td>{findCountry.capital[0]}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{findCountry.area} km <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {
                                    findCountry.borders.map((elm) => {
                                        return <li key={elm}><Link to={`/${elm}`}>{elm}</Link></li>
                                    })
                                }
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default CountryDetails
import { Link, useParams } from "react-router-dom"
import axios from "axios";
import { useEffect, useState, useCallback } from "react";

export const CountriesDetails = (id) => {

    const [country, setCountry] = useState({});

    const params = useParams();

    const getCountry = useCallback(async () => {
        try {
            const response = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${params.id}`)
            setCountry(response.data)
            console.log(response.data);
        } catch (error) {
            window.alert('Houve um erro!')
        }
    }, [params.id])


    useEffect(() => {
        getCountry()

    }, [getCountry])

    return (
        <div className='CountriesDetails'>
            <h1>Country details</h1>
            <p>{country.name && country.name.common}</p>
            <p>Bandeira: {country.alpha2Code}</p>
            <p> Capital: {country.capital}</p>
            <p> Area: {country.area} km²</p>
            <p>Borders:</p>
            <table>
                <td>Border:</td>
                {country.borders && country.borders.map((border) =>
                    <Link to={`/country/${border}`} key={`${border}_key`}>
                        <li> {border} </li>
                    </Link>
                )}
            </table>
        </div >
    )
}

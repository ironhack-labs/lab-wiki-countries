import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom"
import axios from 'axios';


const CountryDetails = ({ countries }) => {

    const { id } = useParams()

    const [country, setCountry] = useState();

    useEffect(() => {
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
            .then(response => setCountry(response.data))
            .catch(error => console.log(error));
    }, [id])


    if (!country) {
        return <div> Loading... </div>
    }

    let img = `https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`


    return (
        <>
            <img src={img} alt="flag" />
            <h1> {country.name.common} </h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: "30%" }}>Capital</td>
                        <td>{country.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{country.area} km<sup>2</sup></td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            {country.borders.map(elm => <Link to={`/${elm}`}> <p key={elm}>{elm}</p> </Link>)}
                        </td>
                    </tr>
                </tbody>
            </table>
        </>

    )
}


export default CountryDetails
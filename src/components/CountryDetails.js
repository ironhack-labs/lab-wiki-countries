import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';



function CountryDetails({countries}){

    const { id } = useParams();

    // const country = countries.filter((element) => element.alpha3Code === id)[0]

    const [country, setCountry] = useState(null)

    const baseUrl = "https://ih-countries-api.herokuapp.com"

    useEffect( () => {
        axios
        .get(baseUrl + '/countries/' + id)
        .then((response) => {
          setCountry(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }, [id]);



    const findCountry = (id) => {
        const result = countries.filter((element) => element.alpha3Code === id)[0]
        return result.name.common;
    }

    return (
        <div className="details">
            { country === null 
                ? <p>loading...</p>
                : <div className="col-7">
                    <h1>{country.name.common}</h1>
                    <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                        <td style={{width: "30%"}}>Capital</td>
                        <td>{country.capital[0]}</td>
                        </tr>
                        <tr>
                        <td>Area</td>
                        <td>
                            {country.area} km
                            <sup>2</sup>
                        </td>
                        </tr>
                        <tr>
                        <td>Borders</td>
                        <td>
                            <ul className="borderList">
                                {country.borders.map( (element) => {
                                    return (
                                    <li key={element}>
                                            <Link to={`/${element}`}>
                                                {findCountry(element)}
                                            </Link>
                                        </li> 
                                    )
                                    
                                })}
                            </ul>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            }
        </div>
        
    )
}

export default CountryDetails;
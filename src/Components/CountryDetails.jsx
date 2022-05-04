import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios"


function CountryDetails({ countriesData }) {

    const { countryId } = useParams()

    const [foundCountry, setFoundCountry] = useState({})

    // const foundCountry = countriesData.find((oneCountry) => {   //find devuelve un object, por eso no hay que hacer .map()
    //     return oneCountry.alpha3Code === countryId;

    // });
    // console.log(foundCountry)

    useEffect(() => {
        axios
            .get('https://ih-countries-api.herokuapp.com/countries/' + countryId)
            .then(({ data }) => {

                setFoundCountry(data);
            })
    }, [foundCountry])


    return (
        <div>
            <h1>Country Details</h1>
            <div className="col-7" >
                <p>{countryId}</p>
                <h1>{foundCountry.name.official}</h1>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td >Capital</td>
                            <td>{foundCountry.capital[0]}</td>
                        </tr>
                        <tr>
                            <td>{foundCountry.area} km</td>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    {
                                        foundCountry.borders?.map((elm, idx) => {
                                            return <li key={idx}><Link to={`/${elm}`}>{elm}</Link></li>
                                        })
                                    }
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <hr />
            <Link to="/countries">Back to Countries</Link>

        </div>
    );
}

export default CountryDetails;



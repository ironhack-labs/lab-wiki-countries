import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCountryDetails } from "../api";
// import c from './../countries.json'


function CountryDetails(props) {

    const countiresArray = props.countries
    const [countryDetails, setCountryDetails] = useState(null)
    const [borderNames, setBorderNames] = useState(null)


    const { id } = useParams()

    useEffect(() => {

        // const country = countiresArray.find((country) => country.alpha3Code === id)
        async function handleCountryDetails() {

            // SET THE CLICKED COUNTRY TO THE STATE
            const response = await getCountryDetails(id)
            setCountryDetails(response.data)


            // PROMISE ALL THE MULTIPLE CALLS TO API TO GET THE INFO OF THE BORDER COUNTRIES 
            const responseArray = await Promise.all(response.data.borders.map((code) => {
                const response = getCountryDetails(code)
                return response
            })) 
            const allBorderCountries = responseArray.map((response) => response.data)
            console.log(allBorderCountries)
            setBorderNames(allBorderCountries)

        }


        handleCountryDetails()


        // EXTRA 
        // const borderNames = countryDetails.borders.map((code) => {
        //     return getCountryDetails(code)

        // });

        // Promise.all(borderNames).then(val => {
        //     console.log(val)
        // })

        // setBorderNames(borderNames)

    }, [id]);  // changes everytime that the id in the url changes


    // if (!countryDetails) return <p style={{ color: 'red' }}> Country Not Found</p>


    // function findBorderCountry(code) {

    //     const borderCountry = countiresArray.find((country) => country.alpha3Code === code)

    //     return borderCountry;
    // }


    console.log(borderNames)
    return (
        <>
            {

                // NEED BOTH STATES TO EXIST OR WE WILL HAVE AN ERROR WHEN DOING MAP 
                (countryDetails && borderNames)  ? (
                    <div className="col-7">
                        <img style={{ width: "300px" }} src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetails.alpha2Code.toLowerCase()}.png`} alt='flag' />
                        <h1>{countryDetails.name.common}</h1>
                        <table className="table">
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <td style={{ width: "30%" }}>Capital</td>
                                    <td>Paris</td>
                                </tr>
                                <tr>
                                    <td>Area</td>
                                    <td>
                                        {countryDetails.area}
                                        <sup>2</sup>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Borders</td>
                                    <td>
                                        <ul>
                                            {borderNames.map((border) => {
                                                return (
                                                    <li key={border.alpha3Code}><Link to={`/${border.alpha3Code}`}>{border.name.common}</Link></li>
                                                )
                                            })}

                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ) : (

                    <p>loading...</p>
                )
            }

        </>
    )
}

export default CountryDetails;
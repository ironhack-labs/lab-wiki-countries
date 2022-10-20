import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function CountryDetails(country) {
    let { countryCode } = useParams();
    
    //const [countryByAlpha, setCountryByAlpha] = useState(country[0])
    //useEffect(() => {
    //    const oneContry = country.filter(oneCountr => {
    //        return  oneCountr.alpha3Code === countryCode;
    //    })
    //    setCountryByAlpha(oneContry);
    //    console.log(oneContry);
    //  }, []);


    return (
        <div className="col-7">
            <h1>{ countryCode }</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        {/* <td style="width: 30%">Capital</td> */}
                        <td>Capital</td>
                        <td>Capital</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                        0 km
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                <li><a href="/AND">Andorra</a></li>
                                <li><a href="/BEL">Belgium</a></li>
                                <li><a href="/DEU">Germany</a></li>
                                <li><a href="/ITA">Italy</a></li>
                                <li><a href="/LUX">Luxembourg</a></li>
                                <li><a href="/MCO">Monaco</a></li>
                                <li><a href="/ESP">Spain</a></li>
                                <li><a href="/CHE">Switzerland</a></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default CountryDetails;
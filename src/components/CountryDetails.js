import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function CountryDetails({country}) {
    let { countryCode } = useParams();
    //console.log(country);
    //console.log(countryCode);
    const oneContry = country.filter(oneCountr => {
               return  oneCountr.alpha3Code === countryCode;
          })
          //console.log(oneContry);

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
            <h1>{oneContry[0].name.official}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        {/* <td style="width: 30%">Capital</td> */}
                        <td>Capital</td>
                        <td>{oneContry[0].capital[0]}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                        {oneContry[0].area} km
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                            {oneContry[0].borders.map((border, index) => {
                                //console.log(border);
                                return (<li><a href={`/${border}`}>{border}</a></li>)

                            })}
                                
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default CountryDetails;
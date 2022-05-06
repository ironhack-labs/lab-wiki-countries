import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom"; 
import axios from "axios";



function CountryDetails(props) {

    const [foundCountry, setFoundCountry] = useState(null);

    const { countriesArray } = props;
    const { countryCode } = useParams();

    useEffect(() => {

        const myCountry = countriesArray.find(countryElement => {
            return countryElement.alpha3Code === countryCode;
        })

        setFoundCountry(myCountry);
    }, [countryCode, countriesArray]);

    return(
        <>
        {foundCountry && (
            <>
            <>
          <h1> {foundCountry.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: '30'}}>Capital</td>
                  <td> {foundCountry.capital[0]}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                     {/** COUNTRY SIZE **/} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {!Boolean(foundCountry.borders.length) && <span>No shared borders!</span>}
                     {/** MAP THROUGH COUNTRY BORDER AND GENERATE LINKS **/}
                     {foundCountry.borders.map(borderingCountryCode => {
                        return (
                            <li key={borderingCountryCode}>
                                <Link to={borderingCountryCode}>
                                    {borderingCountryCode}
                                </Link>
                            </li>
                            );
                     })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
        </>
            </>
        )}
        </>
    );

}

export default CountryDetails;
import React                from "react";
import { Link, useParams }  from "react-router-dom";

function CountryDetails(props) {
    const { countryId } = useParams();
    const foundCountry = props.countriesList.find((singleCountry) => {
        return singleCountry.alpha3Code === countryId;
    });
    foundCountry && console.log(foundCountry);
    return (
          <div class="col-7">
            <h1>{ foundCountry.name.common }</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>{ foundCountry.capital }</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    { foundCountry.area } km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                        <p>
                            {foundCountry.borders.length === 0 ? null : foundCountry.borders.map(element => {
                                const borderCountry = props.countriesList.find(country => country.alpha3Code === element);
                                return (
                                    <li>
                                        <Link to={`/${ borderCountry.alpha3Code }`}>{ borderCountry.name.official }</Link>
                                    </li>
                                )
                            })}
                        </p>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    )
}

export default CountryDetails;
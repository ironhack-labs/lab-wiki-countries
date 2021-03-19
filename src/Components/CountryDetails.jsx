import React from 'react'



const CountryDetails = (props) => {


    const countryID = props.match.params.id;
    const foundCountry = props.countries.find(country => country.alpha3Code === countryID);
    const borderCountries = [];

    foundCountry.borders.forEach(border => {

        const value = props.countries.find(country => country.alpha3Code === border);
        borderCountries.unshift({name: value.name, cca3: value.alpha3Code})

    })

    return (
        <div className="col-7">
        <h1>{foundCountry.name}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: "30%"}}>Capital</td>
              <td>{foundCountry.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {foundCountry.area}km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {borderCountries.length < 1 ? "No bordering countries" : borderCountries.map((border) => (
                    <li key={border.cca3} >
                      <a href={`/${border.cca3}`}>{border.name}</a>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}

export default CountryDetails





import { useParams } from "react-router-dom";

function CountryDetails({data}) {

    const { id } = useParams();

    const country = data.find(e => {
        return e.alpha3Code === id
    })

    const borderCountries = country.borders.map(borderCode => {
        const borderCountry = data.find(country => country.alpha3Code === borderCode)
        return borderCountry
    })

    return (
        <div className="col-7">
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" />
            <h1>{country.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{country.capital}</td>
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
                    <ul>
                      {borderCountries.map(country => {
                        return(
                            <li className="borderList" key={country.alpha3Code}><a href={country.alpha3Code}>{country.name.common}</a></li>
                        )
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
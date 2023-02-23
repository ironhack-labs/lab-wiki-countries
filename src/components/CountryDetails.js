import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CountryDetails(props) {

  const {id} = useParams()

const oneCountry = props.countries.find(country => {
      return country.alpha3Code === id
    })

    return ( 
        <div className="col-7">
          <img src={`https://flagpedia.net/data/flags/icon/72x54/${oneCountry.alpha2Code.toLowerCase()}.png`} />
            <h1>{oneCountry.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{oneCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {oneCountry.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                  {oneCountry.borders.map(border => {
                            return (
                                <li><Link to={`/${border}`}>{props.countries.find(country => country.alpha3Code === border).name.common}</Link></li>
                            )
                        })}
                        </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
     );
}

export default CountryDetails;
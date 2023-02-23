import { useParams, Link } from "react-router-dom";


function CountryDetails(props) {
  const { code } = useParams()
  
  const oneCountry = props.countries.find(country => {
    return code === country.alpha3Code
  })

  return (
    <div className="col-7">
      <h1>{oneCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{width: "30%"}}>Capital</td>
            <td>{oneCountry.capital[0]}</td>
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
                  return <li><Link to={`/countryDetails/${border}`}>{props.countries.find(country => country.alpha3Code === border).name.common}</Link></li>
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

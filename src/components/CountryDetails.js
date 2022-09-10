import db from "../countries.json"
import { useParams } from "react-router-dom"

function CountryDetails(){
    const { id } = useParams()
    const details = db.find((data)=> data.alpha3Code === id);

    return(
        <div className="col-7">
          <h1>{details.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{details.capital[0]}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {details.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {details.borders.map(el => {
                        const country = db.find((data)=> data.alpha3Code === el);
                        return <li key={country.alpha3Code}>{country.name.common}</li>
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
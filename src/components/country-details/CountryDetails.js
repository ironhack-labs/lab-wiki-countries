import { NavLink } from 'react-router-dom'
import countries from '../../countries.json'


const Details = props => {

  const country = countries.find(elm => elm.cca3 === props.match.params.code)
  const borders = country.borders.map(border => countries.find(elm => elm.cca3 === border))

  return (
    <div className="col-7">
      <h1>{ country.name.common }</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>{ country.capital }</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{ country.area } km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                { borders.map(elm => <li><NavLink key={elm.cca3} to={elm.cca3}>{elm.name.common}</NavLink></li>) }
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    )
}

export default Details
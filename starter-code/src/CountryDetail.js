import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class CountryDetail extends Component {
  render() {
    //pass props here not in main page
    let countryFlag= this.props.Countries.find(EachCountry =>{
      return EachCountry.flag === this.props.match.params.id
    })

    let countryBorder = countryFlag.borders.map(EachBorder=>{
      let BorderingCountry= this.props.countries.find(EachCountry=>{
        return EachBorder === EachCountry.cca3
      })
      return(
      <li>
        <Link to={`/country/$BorderingCountry.name.common`}>
        <h1>{BorderingCountry.flag}</h1>
        <h3>{BorderingCountry.name.common}</h3>
        </Link>
      </li>
      )
    })
    return (
    //bulma table set up
      <div className='col=7'>
        <h1>{countryFlag.name.common}</h1>
        <table className="table">
          <thead>
            <tbody>
              <tr>
                <td>Capital</td>
                <td>{countryFlag.capital[0]}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>{countryFlag.area}
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {countryBorder}
                  </ul>
                </td>
              </tr>
            </tbody>
          </thead>
        </table>

      </div>
    );
  }
}

export default CountryDetail;
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class CountryDetail extends Component {

  listBorders = (borders) => {
    return borders.map((border, idx) => { 

      const borderSel = this.props.countries.find((country) => {
        return country.cca3 === border;
      })

      return borderSel.name ?
       (
        <li key={border}><Link to={`/${border}`}>{borderSel.name.common}</Link></li>
       ) : (
       <li></li>
       )
    })
  }

  displayDetail = () => {
    const { countryId } = this.props.match.params;
    const countrySel = this.props.countries.find((country, idx) => {
      return country.cca3 === countryId;
    })
    return (
      <div>
        <h1>{countrySel.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: `30%`}}>Capital</td>
              <td>{countrySel.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{countrySel.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {this.listBorders(countrySel.borders)}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

  render() {
    return (
      <div className="col-7">
        {this.displayDetail()}        
      </div>
    )
    }
}

export default CountryDetail;
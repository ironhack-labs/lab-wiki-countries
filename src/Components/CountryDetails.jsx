import {Component} from 'react';
import {Link}    from 'react-router-dom';
import countries from '../countries.json';

class CountryDetails extends Component {

  getCountry (id) {
    const country = oneCountry => {
      return oneCountry.cca3 === id;
    }
    return countries.find(country)

  }
  foundBorderName (id) {
    return this.getCountry(id).name.common;
  }
  

    render () {
        const {params} = this.props.match;
        const foundCountry = this.getCountry(params.cca3)
        console.log(params.cca3)
        console.log(foundCountry)
        return (
          <div className='CountryDetails col-7'>
            <h1>{foundCountry.name.official}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: '30%'}}>Capital</td>
                  <td>{foundCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {foundCountry.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {foundCountry.borders.map((border) =>{
                       return (<li><Link to={`/${border}`} key={border}>{this.foundBorderName(border)}</Link></li>)
                      })}
               
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
            )
    }
}

export default CountryDetails;
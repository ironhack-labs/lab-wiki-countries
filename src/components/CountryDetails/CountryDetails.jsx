
import {Link} from "react-router-dom"
const CountryDetails = ({props, data}) => {
    const getCountryName = (country) => {
        const found = data.find((item) => item.alpha3Code === country)
        return found.name
    }
    const getCountry = (info) => {
        const country = data.find((item) => item.alpha3Code === props.match.params.cca3)
        switch(info) {
            case 'countryName':
                return country.name
            case 'capital':
                return country.capital
            case 'area':
                return country.area
            case 'borders':
                return country.borders
            case 'cca3':
                return country.alpha3Code
            default:
                return null
          }
    }
    return (
        <div className='CountryDetails'>
            <div className="col-7">
            <h1>{getCountry('countryName')}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>{getCountry('capital')}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                  {getCountry('area')} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {getCountry('borders').map((border) => {
                        return(
                            <li key={border}>
                                <Link to={`/${border}`}>{getCountryName(border)}</Link>
                            </li>
                        )
                    })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    );
};
export default CountryDetails;
//metodos routes: location, hystory, match 
import {Link} from 'react-router-dom'; 
import DataCountries from '../countries.json';

const CountryDetails = (/*{location, hystory, match}*/props) => {
    /*
    const country = location.state.name.official;
    const capital = location.state.capital;
    const area = location.state.area;
    const borders = location.state.borders;
    */

    const getCountry = (id) => {
        const theCountry = DataCountries => {
          return DataCountries.cca3 === id;
        }
        return DataCountries.find(theCountry)
      };
      
      const { params } = props.match;
      const foundCountry = getCountry(params.id, 10);
       
      const country = foundCountry.name.official;
      const capital = foundCountry.capital;
      const area = foundCountry.area;
      const bordersCca3 = foundCountry.borders;
      const borderName = [];

      const transformCca3 = (borders) => {
            borders.forEach((border) => {
                borderName.push(getCountry(border).name.official)
            })
      }
      
      transformCca3(bordersCca3);

      let message = "Borders"
      if (borderName.length === 0) message = "There are no borders"

    return(
        <div className="col-7">
            <h1>{country}</h1>
            <table className="table">
            <thead></thead>
            <tbody>
                <tr>
                <td style={{width: "30%"}}>Capital</td>
                <td>{capital}</td>
                </tr>
                <tr>
                <td>Area</td>
                <td>
                    {area} km
                    <sup>2</sup>
                </td>
                </tr>
                <tr>
                <td>{message}</td>
                <td>
                    <ul>
                    {
                        bordersCca3.map((border, index_c) => (
                            <li key={index_c}>
                                <Link to = {{
                                    pathname:`/${border}`,
                                    state:country
                                }}>
                                    {borderName[index_c]}
                                </Link>
                            </li>
                        ))
                    }
                    </ul>
                </td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}

export default CountryDetails;
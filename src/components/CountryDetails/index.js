import { Link, useParams } from 'react-router-dom';
import data from '../../countries.json'

const CountryDetails = (props) =>{
    const {id} = useParams();
    console.log("the id", id)

    const theCountry = data.find((item) => item.alpha3Code === id)
    console.log("country", theCountry)

    return(
        <div class="col-7">
        <h1>{theCountry.name.common}</h1>
        <table class="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: '30%'}}>Capital</td>
              <td>{theCountry.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
              {theCountry.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                 {theCountry.borders.map((border, index) =>{
                     return(
                        <li key={index}>
                            <Link 
                            to={`/${border}`}>
                            {border}
                            </Link>
                        </li>
                     )
                 })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
};

export default CountryDetails;
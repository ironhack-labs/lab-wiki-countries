import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function CountryDetails(props) {
  const { id } = useParams();
  const country = props.countries.filter(
    (element) => element.alpha3Code === id
  )[0];
  const {name, capital, area, borders, alpha2Code}  = country
  return (
    <div className="col-7">
    <img src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`} alt="flagIcon"/>
       <h1>{name.common}</h1>
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
                  <td>Borders</td>
                  <td>
                    <ul>
                    {borders.map((element)=><Link to={`/${element}`}><li>{element}</li></Link>)}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
    </div>
  );
}

export default CountryDetails;

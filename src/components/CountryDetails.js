// import countries from '../countries.json';
import { useParams } from 'react-router-dom';
import {useEffect,useState} from "react"
import {Link} from "react-router-dom"
import axios from 'axios';

const CountryDetails = (props) => {
    const {countryId} = useParams();
    const [foundCountry,setFoundCountry] = useState(null)
    const [countryArr,setCountryArr] = useState(null)
 
    useEffect(() => {
      axios
        .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
        .then((response) => {
          //console.log(response.data);
          setFoundCountry(response.data);
        })

        .catch((e) => {
          console.log('There was an error', e);
        });
    }, [countryId]);

    useEffect(() => {
      axios
        .get(`https://ih-countries-api.herokuapp.com/countries/`)
        .then((response) => {
          setCountryArr(response.data);
        })
        .catch((e) => {
          console.log('There was an error', e);
        });
    }, [countryArr]);
    
      if (!foundCountry) {
        return <p> Loading... </p>;
      }
      return (
        <div className="col-6">
          <h2>{foundCountry.name.official}</h2>

          <p>Capital: {foundCountry.capital.map((elm, index) => {
            return <li key={index} className="list-inline-item">{elm}</li>;
          })}</p>
          <p>Region: {foundCountry.region}</p>
          <p>Area: {foundCountry.area}</p>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`}
          />
          <p>
            Borders:{' '}
            {foundCountry.borders.map((elm, index) => {
                return <p key={index}>
                <Link to={`/country/${elm}`}>
                    {elm}
                </Link>
                </p>;
            })}
          </p>
        </div>
      );
}

export default CountryDetails
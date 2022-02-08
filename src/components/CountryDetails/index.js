import './CountryDetailsStyle.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react/cjs/react.development';
import { Link } from 'react-router-dom';


function CountryDetails(props) {
    const {id} = useParams();
    const [country, setCountry] = useState('');
    const [borders, setBorders] = useState([]);

    const apiRequest = async (countryId) => {
        try {
            return await axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`);
        } catch(err) {
            console.log(err);
        }
    }

    const getBorders = (bordersData) => {
        if(!bordersData.length) {
            setBorders([false]);
        } else {
            setBorders([]);
            bordersData.map(border => 
                apiRequest(border)
                .then(res => {
                  setBorders((prevBorders) => [...prevBorders, res.data]);
                })
            )
        }
    }

    useEffect(() => {
        apiRequest(id).then((res) => {
            setCountry(res.data);
            getBorders(res.data.borders)
        })
    }, [id]);

    return (
      <div className="col-7 ps-4 pt-2 CountryDetails">
        {country === '' ? ''
        :   <div>
                <h1>{country.name.official}</h1>
                <hr />
                <p>Capital<span>{country.capital}</span></p>
                <hr />
                <p>Area<span>{country.area} km <sup>2</sup></span>
                </p>
                <hr />
                <section>
                <p>Borders</p>
                <ul>
                    {borders.map((border) => (
                        (!border) ? <b>No borders</b>
                        : <li key={border._id}>
                            <Link className='linx' to={`/${border.alpha3Code}`}>
                                {border.name.common}
                            </Link>
                        </li>
                    ))}
                </ul>
                </section>
            </div>
        }
      </div>
    );
}

export default CountryDetails;
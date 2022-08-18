import { Link, NavLink } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';



function CountriesList(props) {
  const [country, setCountry] = useState([])
  const [countryID, setCountryID] = useState(props.countryID);

  const getCountries = async () => {
    try {
      let response = await axios.get('https://ih-countries-api.herokuapp.com/countries')
      setCountry(response.data)
      console.log(response.data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {

    getCountries();
  }, []);

  return (
    <div className="container">
        <div className="row">
            <div className="col-5">
                <div className="list-group">
                  {country.map((banana) => {
                    return (
                      
                      <div key={banana._id} className="list-group-item list-group-item-action">
                        <Link to={`/${banana.alpha3Code}`}>
                          <div className="country-list">
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${banana.alpha2Code.toLowerCase()}.png`} alt="" />
                            <h3>{banana.name.common}</h3>
                          </div>
                        </Link>
                      </div>
              
                    ) 
                  })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default CountriesList




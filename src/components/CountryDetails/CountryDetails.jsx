import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { countryDetail } from '../../services/WikiService';

const CountryDetails = ({countries}) => {
  const { id } = useParams();
  //useparams coge el id del path que hay en el Home, que a su vez, estamos diciendole en el Link de countriesList que sea el country.alpha3Code
  console.log(id);

  const [country, setCountry] = useState(null);


  useEffect(() => {
    countryDetail(id).then((country) => {
      console.log(country);
      setCountry(country);
    });
  }, [id]);


  
  return (
    <div className="col-8 text-center">
     {country ? (
        <div className="justify-content-center">
      <img
        className=""
        width={150}
        src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
        alt=""
      />

      <h3>{country.name.common}</h3>
      <h5>Capital: {country.capital[0]}</h5>
      <p>Area: {country.area + ' km2'}</p>
      <p>Borders</p>
      { country.borders.length > 0 ?
        country.borders.map((border)=>{
        return <div> 
        <p key={border}>
                <Link to={`/${border}`}>
                {countries.find((findCountry) => border === findCountry.alpha3Code).name.common}
                </Link>
              </p>
        </div>
      })
      : "No borders in this country"
      }

    </div>
  ): 'Loading country...'} 
    </div>
)};

export default CountryDetails;

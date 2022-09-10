import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function CountryDetails(props) {
  const { a3 } = useParams();
  //   console.log(countryId)

  const myCountry = props.data.find((el) => {
    return el.alpha3Code === a3;
  });

  return (
    <div>
    <img src={`https://flagpedia.net/data/flags/icon/72x54/${myCountry.alpha2Code.toLowerCase()}.png`} />
      <h1>{myCountry.name.common}</h1>
      <p>Capital : {myCountry.capital.toString()}</p>
      <hr />
      <p>Area : {myCountry.area}km² </p>
      <p>Borders : {myCountry.borders.toString()}</p>
    </div>
  );
}

export default CountryDetails;

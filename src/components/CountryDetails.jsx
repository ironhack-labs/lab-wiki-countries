import { useEffect, useState } from 'react'
import { useParams, Link  } from 'react-router-dom'


function CountryDetails (props) {

  const [ foundCountry, setFoundCountry ] = useState(null);
 
  const  { countriesArray } = props

  const { countryCode } = useParams();

  useEffect(() => {

    const myCountry = countriesArray.find((countryElement) => {
      return countryElement.alpha3Code === countryCode;
    });

    setFoundCountry(myCountry);

  }, [countryCode, countriesArray]);


  return (
    <>
      {foundCountry && (
        <>
          <img src={`https://flagcdn.com/${foundCountry.alpha2Code.toLowerCase()}.svg`} width="250" alt={foundCountry.name.common} />
          <h1>{foundCountry.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{width: '30%'}}>Capital</td>
                <td>{foundCountry.capital[0]}</td>
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
                    {!Boolean(foundCountry.borders.length) && <span>No shared borders!</span>}
                    {foundCountry.borders.map(borderingCountryCode => {
                      return (
                        <li key={borderingCountryCode}>
                          <Link to={`/${borderingCountryCode}`}>
                            {borderingCountryCode}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )} 
    </>
  );
}

export default CountryDetails;
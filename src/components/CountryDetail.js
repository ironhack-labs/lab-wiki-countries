import { useParams, Link } from 'react-router-dom';

export default function CountryDetail({ countries }) {

  const { code } = useParams();
  const [selectedCountry] = countries.filter((country) => country.alpha3Code === code );

  return (
    <>
      <div className='d-flex justify-content-center align-items-center gap-3 mb-3'>
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${selectedCountry.alpha2Code.toLowerCase()}.png`} 
          style={{width: '10%', marginRight: '10px'}} 
          alt={selectedCountry.name.official} 
        />
        <h1>{selectedCountry.name.official}</h1>
      </div>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{width: '30%'}}>Capital</td>
            <td>{selectedCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{selectedCountry.area} km<sup>2</sup></td>
          </tr>
          <tr>
            <td>Borders</td>
            <td><ul className='list-unstyled'>
              {selectedCountry.borders.map(border => 
                (<li>
                  <Link to={`/${border}`} key={border}>
                    {countries.find(country => country.alpha3Code === border).name.common}
                  </Link>
                </li>)
              )}
            </ul></td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

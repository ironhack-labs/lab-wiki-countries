import { Link, useParams } from 'react-router-dom';

export const CountryDetails = ({ countries }) => {
  const { countryId } = useParams();

  const foundCountry = countries.find(
    (country) => country.alpha3Code === countryId
  );

  return (
    <div className="col-7 text-center mg-auto">
      <h1>{foundCountry.name.common}</h1>
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`}
        alt=""
      />
      <table className="table text-center">
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{foundCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundCountry.area} km<sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {foundCountry.borders.map((border) => {
                  return (
                    <li key={border}>
                      <Link to={`/${border}`}>
                        {
                          countries.find((country) => {
                            return country.alpha3Code === border;
                          }).name.common
                        }
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// {/* <table class="table">
//   <thead></thead>
//   <tbody>
//     <tr>
//       <td style="width: 30%">Capital</td>
//       <td>Paris</td>
//     </tr>
//     <tr>
//       <td>Area</td>
//       <td>
//         551695 km
//         <sup>2</sup>
//       </td>
//     </tr>
//     <tr>
//       <td>Borders</td>
//       <td>
//         <ul>
//           <li>
//             <a href="/AND">Andorra</a>
//           </li>
//           <li>
//             <a href="/BEL">Belgium</a>
//           </li>
//           <li>
//             <a href="/DEU">Germany</a>
//           </li>
//           <li>
//             <a href="/ITA">Italy</a>
//           </li>
//           <li>
//             <a href="/LUX">Luxembourg</a>
//           </li>
//           <li>
//             <a href="/MCO">Monaco</a>
//           </li>
//           <li>
//             <a href="/ESP">Spain</a>
//           </li>
//           <li>
//             <a href="/CHE">Switzerland</a>
//           </li>
//         </ul>
//       </td>
//     </tr>
//   </tbody>
// </table>; */}

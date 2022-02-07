import { Link } from 'react-router-dom';

export default function CountriesList({ countries }) {

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-4">
          <ul className="list-group">
            {countries.map((country) => {
              const Flag =
                'https://flagpedia.net/data/flags/icon/72x54/' +
                country.alpha2Code.toLowerCase() +
                '.png';
              return (
                <li key={country.alpha3Code} className="list-group-item">
                  <div className="float-right">
                  <img src={Flag} alt={country.name.common} style={{width: "50px"}} />
                  </div>
                  <Link className="text-decoration-none pe-auto" to={`/countries/${country.alpha3Code}`}>
                    {country.name.common}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

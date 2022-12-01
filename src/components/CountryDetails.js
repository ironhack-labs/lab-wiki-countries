import { Link, useParams } from 'react-router-dom';

export default function CountryDetails({ countries }) {
  const { code } = useParams();
  const {
    capital,
    area,
    borders,
    name: { official },
  } = countries.find((c) => c.alpha3Code === code);

  const neighbours = (list) => {
    return list.map((c) => {
      const {
        alpha3Code,
        name: { common },
      } = countries?.find((country) => country.alpha3Code === c);

      return (
        <li key={alpha3Code}>
          <Link to={`/${alpha3Code}`}>{common}</Link>
        </li>
      );
    });
  };

  return (
    <div className="col-7">
      <div className="country-list ms-3">
        <div className="row">
          <div className="country-title">
            <h2>{official}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-4 country-col">Capital</div>
          <div className="col-8 country-col">
            {capital?.map((c) => (
              <span key={c}>{c || 'no capital'}</span>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col-4 country-col">Area</div>
          <div className="col-8 country-col">
            {area} km<sup>2</sup>
          </div>
        </div>
        <div className="row">
          <div className="col-4 country-col">
            Borders <small>{borders.length || ''}</small>
          </div>
          <div className="col-8 country-col">
            <ul>
              {borders.length > 0 ? (
                neighbours(borders)
              ) : (
                <span>no borders</span>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

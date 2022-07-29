import { Link } from 'react-router-dom';

function CountriesList(props) {
  
  const renderCountries = () => {
      const result = props.countries.map((country) => {
        
        const flagCode = country.alpha2Code.toLowerCase();
      return (
        <Link className="list-group-item list-group-item-action" to={`/${country.alpha3Code}`} key={country.alpha3Code}>
          <p>{country.name.common}</p>
          <img className="mini-flag" src={`https://flagpedia.net/data/flags/icon/72x54/${flagCode}.png`} alt="Country flag" />
        </Link>
      );
    });

    return result;
  };

  return (
    <div className="col-5" style={{ maxHeight: 90 + 'vh', overflow: 'scroll' }}>
      <div className="list-group">{renderCountries()}</div>
    </div>
  );
}

export default CountriesList;

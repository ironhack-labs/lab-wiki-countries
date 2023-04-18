import { Link } from 'react-router-dom';

function CountriesList({ countriesData }) {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group countryCard">
        {countriesData.map((country) => (
          <Link
            key={country.alpha3Code} // set the key prop of each Link element to the country's alpha3Code
            className="list-group-item list-group-item-action" // apply classes for styling
            to={'/' + country.alpha3Code} // set the 'to' prop of each Link element to the country's alpha3Code
          >
            <img
              width="50" // set the width of the image
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} // set the source of the image to the URL of the country's flag
              alt={`flag-of-${country.name.common}`} // set the alt attribute of the image to 'flag-of-' followed by the country's common name
            />
            
            <p>{country.name.common}</p> 
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CountriesList;

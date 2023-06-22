import { ScrollSpy } from 'bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function CountriesList(props) {
  const { countryDetails } = useParams();

  return (
    <div className="container">
      <div className="row">
        <div
          className="col-5"
          style={{ maxHeight: 90 + 'vh', overflow: 'scroll' }}
        >
          <div className="list-group">
            {props.countryArr.map((country) => {
              console.log(country.name.common);
              console.log(country.alpha2Code.toLowerCase());

              return (
                <Link
                  className="list-group-item list-group-item-action"
                  to={'/' + country.alpha3Code}
                >
                  <img
                    src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  />{' '}
                  <p>{country.name.common}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountriesList;

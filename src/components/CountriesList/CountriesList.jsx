import { Link } from 'react-router-dom';

function CountriesList(props) {
const {countries} = props;
  return (
    <div>
      {countries &&
        countries.map((elem) => {
          return (
            <>
              <div key={elem.cca3} className="container">
                <div className="row">
                  <div className="col-5 max-height: 90vh; overflow: scroll">
                    <div className="list-group">
                      <img src={elem.flags.png} alt="" />
                      <Link to={`/countryDetails/${elem.cca3}`}>
                        <h3 className="list-group-item list-group-item-action">
                          {elem.name.common}
                        </h3>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
}

export default CountriesList;

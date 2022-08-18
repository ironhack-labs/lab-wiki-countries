import { useParams } from 'react-router-dom';

function CountryDetails(props) {
  const { countryCca3 } = useParams();
  const { countries } = props;
  const countryInfo = countries.find((country) => country.cca3 === countryCca3);

  return (
    <div>
      {countryInfo && (
        <>
          <h2>Country Details</h2>
          <div className="container">
            <div className="row">
              <div className="col-3 max-height: 90vh; overflow: scroll">
                <div className="list-group">
                  <img src={countryInfo.flags.png} alt="" />

                  <h3 className="list-group-item list-group-item-action">
                    {countryInfo.name.common}
                  </h3>
                  <h3 className="list-group-item list-group-item-action">
                    Official Denomination: {countryInfo.name.official}
                  </h3>
                  <h3 className="list-group-item list-group-item-action">
                    Capital: {countryInfo.capital}
                  </h3>
                  <h3 className="list-group-item list-group-item-action">
                    CCA3: {countryInfo.cca3}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CountryDetails;

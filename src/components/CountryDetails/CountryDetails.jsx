import {useParams} from 'react-router-dom'

function CountryDetails(props) {
    const {countryCca} = useParams();
    const {countries} = props;

    const foundCountry = countries.find((country) => country.cca3 === countryCca); 

    return (
<div>

        
        {foundCountry && (
        <>

        <h2>Country Details</h2>
              <div className="container">
                <div className="row">
                  <div className="col-3 max-height: 90vh; overflow: scroll">
                    <div className="list-group">
                      <img src={foundCountry.flags.png} alt="" />

                        <h3 className="list-group-item list-group-item-action">
                          {foundCountry.name.common}
                        </h3>
                        <h3 className="list-group-item list-group-item-action">
                          Official Denomination: {foundCountry.name.official}
                        </h3>
                        <h3 className="list-group-item list-group-item-action">
                          Capital: {foundCountry.capital}
                        </h3>
                        <h3 className="list-group-item list-group-item-action">
                          CCA3: {foundCountry.cca3}
                        </h3>

                    </div>
                  </div>
                </div>
              </div>
            </>
        )
        }
</div>
        )
        }



export default CountryDetails
import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = ({countries = [], ...props}) => {
    return (
    //   <!-- Bootstrap container wrapper div -->
        <div className="container text-left m-0">
        {/* <!-- Bootstrap row wrapper div --> */}
            <div className="row">
          {/* <!-- Countries List (Bootstrap column) --> */}
                <div className="col-5" style={{maxHeight: "35rem", overflow: "scroll"}}>
                    <div className="list-group">
                {
                    countries.map(country => {
                        return (
                            <div  key={country.cca3}>
                                <Link to={`/countries/${country.cca3}`}>{country.name.common}</Link>
                            </div>
                            )
                    })
                }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountriesList;


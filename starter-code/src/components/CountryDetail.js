import React from 'react'
import countries from '../countries.json';

const CountryDetails = (props) => {
    const oneCountry = (id) => {
        const Country = oneCountry => {
            return oneCountry.cca3 === id;
        }
        return countries.find(Country)
    };

    const { params } = props.match;
    const idCountry = oneCountry(params.id);

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>{idCountry.name.official}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <p>Capital:</p>
                    </div>
                    <div className="col-6">
                        <p>{idCountry.capital[0]}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <p>Area:</p>
                    </div>
                    <div className="col-6">
                        <p>{idCountry.area}km2</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <p>Limitrofe con:</p>
                    </div>
                    <div className="col-6">
                        <ul>
                            {/* {
                                limitCountry.border.map((elm,idx)=> limitCountry
                                    return <Link className="list-group-item list-group-item-action" to={country.cca3}>{country.flag}{country.name.official}</Link>

                                )
                            } */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountryDetails;
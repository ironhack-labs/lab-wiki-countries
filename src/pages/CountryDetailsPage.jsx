import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CountryDetails() {

    const [country, setCountry] = useState(null)

    const { countryId } = useParams()

    useEffect(() => {
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
            .then((selectedCountry) => {


                setCountry(selectedCountry.data)

                console.log(selectedCountry.data)
            })
            .catch((err) => {
                console.log(err)
            })
        console.log(country)

    }, [countryId])

    if (!country) {
        return <div>Loading...</div>
    }


    return (
        <div className="container mt-4">
            <h2 className="mb-3">Country Details</h2>

            <div className="card mb-3">
                <div className="row justify-content-center"> 
                    <div className="card-body text-center">
                        <img style={{ width: '70px', height: '50px' }} src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                            alt={`${country.name.common} Flag`} className="img-fluid rounded-start" />
                    </div>
                    <div className="col-md-8">
                        <div > 
                            <h3 className="card-title" style={{ fontWeight: 'normal' }}> <strong>Name:</strong> {country.name.common}</h3>
                            <p className="card-text"><strong>Capital:</strong> {country.capital}</p>
                            <p className="card-text"><strong>Area:</strong> {country.area} km²</p>
                            <p className="card-text mb-2"><strong>Borders:</strong></p>
                            {country.borders.length > 0 ? country.borders.map((oneBorder) => (
                                <Link key={oneBorder} className="btn btn-outline-primary me-2 mb-2" to={`/${oneBorder}`}>
                                    {oneBorder}
                                </Link>
                            )) : <p className="text-muted">No bordering countries</p>}


                        </div>
                        <Link to={"/"}>
                            <button className="btn btn-success me-2 mb-4" style={{ marginTop: "30px" }}>Back to Homepage</button>
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default CountryDetails;

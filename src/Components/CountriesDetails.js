import { Link, useParams } from "react-router-dom"
import axios from "axios";
import { useEffect, useState, useCallback } from "react";

export const CountriesDetails = ({ countries }) => {

    const [country, setCountry] = useState({});

    const params = useParams();

    const getCountry = useCallback(async () => {
        try {
            const response = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${params.id}`)
            setCountry(response.data)
            console.log(response.data);
        } catch (error) {
            window.alert('Houve um erro!')
        }
    }, [params.id])

    const getCountryName = (alpha3Code) => {
        const country = countries.find((country) => {
            return (alpha3Code === country.alpha3Code)
        })
        return country && country.name.common
    }

    useEffect(() => {
        getCountry()

    }, [getCountry])

    return (
        <div className='CountriesDetails' style={{
            width: '1000px'
        }}>
            <div className='px-2 py-3'>

                <p style={{ textAlign: 'center' }} ><img style={{ marginLeft: '80px' }} src={`https://flagpedia.net/data/flags/w580/${country.alpha2Code.toLowerCase()}.png`} alt={'text'} key={country._id} /></p>
                <h2 className='mb-4' style={{ textAlign: 'center' }} >{country.name && country.name.common}</h2>
                <div className='row pt-3 pb-2 border-bottom' >
                    <div className='col-md-4' >
                        <p> Capital: </p>
                    </div>
                    <div className='col-md-4'>
                        <p>{country.capital}</p>
                    </div>
                </div>
                <div className="row pt-3 pb-2 border-bottom">
                    <div className="col-md-4">
                        <p>Area</p>
                    </div>
                    <div className="col-md-4">
                        <p>{country.area} km²</p>
                    </div>
                </div>
                <div className="container col-md-4" style={{
                    justifyContent: 'left'
                }}>
                    <div>
                        <p>Borders</p>
                    </div>
                    <div>
                        <ul>
                            {country.borders && country.borders.length ? country.borders.map((border) =>
                                <Link style={{ textDecoration: 'none' }} to={`/country/${border}`} key={`${border}_key`}>
                                    <li style={{ listStyle: 'none' }}> {getCountryName(border)} </li>
                                </Link>
                            ) : <li>No boarder</li>}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}
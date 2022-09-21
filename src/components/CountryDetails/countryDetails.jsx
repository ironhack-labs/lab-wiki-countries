import { Link } from "react-router-dom"
import data from '../../countries.json'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function CountryDetails(){

    const [country, setCountry] = useState({}) 

    const { idCountry } = useParams()
    
    useEffect(() => {
        const find = data.find((country) => country.alpha3Code === idCountry);
        setCountry(find)
    }, [idCountry])

    return (

    <div className="container py-5">
        {
        country.alpha3Code ? 
        <div className="row">
            <div className="col-8">
                <img src={`https://flagpedia.net/data/flags/w702/${country.alpha2Code.toLowerCase()}.webp`} />
            </div>
            <div className="col-4">
                
                <h2>{country.alpha3Code}</h2>
                <hr></hr>
                <h4>Capital: </h4> 
                <p>{country.capital}</p>
                <h4>Area: </h4> 
                <p>{country.area} km²</p>
                
                <div>
                    
                    <h4>Borders: </h4> 
                    {country.borders.map((countryBorders) => {

                        return (
                            <div>
                                <Link to={`/${countryBorders.toLowerCase()}`}>{countryBorders}</Link>
                            </div>
                        );
                    })}
                    
                </div>
            </div>
        </div> : null}
    </div>
    )

}

export default CountryDetails

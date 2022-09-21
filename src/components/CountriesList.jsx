import { Link } from 'react-router-dom';
import CountriesData from '../countries.json';


const Countries = () => {

    return (
        <>
            <div className='list-allcountries'>
                {CountriesData.map((country) => {
                    const flag = country.alpha2Code.toLowerCase()
                    return (
                        <div className='list-countries' key={country.name.common}>
                            <img src={`https://flagpedia.net/data/flags/w702/${flag}.webp`} alt="" />
                            <Link className='countries-link' to={country.alpha3Code}>{country.name.common}</Link>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default Countries
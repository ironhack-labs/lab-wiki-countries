import {Link} from "react-router-dom"

import './CountriesList.css'


const CountriesList = ({data}) => {
    console.log(data)
    return (
        <div className="list-group">
            {data.map((country) => (
                    <div className='link__wrapper' key={country.alpha3Code}>
                    <Link to={`/${country.alpha3Code}`}>
                        <div className='link__style'>
                            <img src={country.flag} alt={country.name} width="30" /> 
                            <span className='mx-2'>{country.name}</span> 
                        </div>
                    </Link>
                </div>
                
            ))}
        </div>
    );
};

export default CountriesList;
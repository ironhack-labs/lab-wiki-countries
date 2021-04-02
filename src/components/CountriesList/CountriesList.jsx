
import './CountriesList.css'
import {Link} from "react-router-dom"


const CountriesList = ({data}) => {
    return (
        <div className="list-group">
            {data.map((country) => (
                    <div className='link__wrapper' key={country.cca3}>
                    <Link to={`/${country.alpha3Code}`}>
                        <div className='link__style'>
                            <img src={country.flag} width='30'/> <span className='mx-2'></span> {country.name} 
                        </div>
                    </Link>
                </div>
                
            ))}
        </div>
    );
};

export default CountriesList;
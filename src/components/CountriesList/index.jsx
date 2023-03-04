import './index.css'
import { Link } from 'react-router-dom'

const CountriesList = ({name,alpha2Code,alpha3Code,...restProps}) => {
    return(
        <Link to={`/countryDetails/${alpha3Code}`} className='link-card'>
        <div className='container-card'>
            <div id="scrollspyHeading1" className="card text-center mb-3">
                <div className="card-body">
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`} className="card-img-top" alt="flag"></img>
                    <p>{name.official}</p>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default CountriesList;
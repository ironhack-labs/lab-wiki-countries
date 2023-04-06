import { Link } from "react-router-dom";

const CountriesList = (props) => {

    const imgUrl = 'https://flagpedia.net/data/flags/icon/72x54/';
    const imgExtension = '.png';

    return(
        <div className="col-5" style={{maxHeight:'90vh', overflow:'scroll'}}>
            <div className="list-group">
                {console.log(props)}
                {props.countries.map( (country) => {
                    return(
                        <Link key={country.alpha2Code} className="list-group-item list-group-item-action" to={`/${country.alpha3Code}`}>
                            <img src={`${imgUrl}${country.alpha2Code.toLowerCase()}${imgExtension}`} alt={country.name.common} style={{width:'25px', marginRight:'10px'}} />
                            {country.name.common}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
};

export default CountriesList;
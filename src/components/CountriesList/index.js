import {Link} from 'react-router-dom'

function CountriesList(props){
    return (
        <div className="col-5">
            <div className="list-group">
                {props.lista.map((country, index)=><Link key={index} className="list-group-item list-group-item-action" to={`/${country.alpha3Code}`}>
                    🇦🇼 {country.name.common}
                </Link>)}
            </div>
        </div>        
    )
}

export default CountriesList;
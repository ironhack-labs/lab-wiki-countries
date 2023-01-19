import { Link } from 'react-router-dom';

export default function CountriesList(props){

    return (
        <div className="col-6">

            {props.countriesList.map((country) => {
                return (
                    <div key={country.alpha3Code} className="list-group">
                        <Link className="list-group-item p-4" to={`/countries/${country.alpha3Code}`}>{country.name.official}</Link>
                    </div>  
                )
            })}
        </div>
    )
}
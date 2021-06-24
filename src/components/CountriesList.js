import {Link} from 'react-router-dom'; 


const CountriesList = ({countries = [0,1,2,3]}) => (
    <ul className="list-group" style={{maxHeight: "90vh", overflow: "scroll"}}>
    {
        countries.map((country, index_c) => (
            <li key={index_c} className="list-group-item list-group-item-action">
                <Link to = {{
                    pathname:`/${country.cca3}`,
                    state:country
                }}>
                    {country.flag}
                    {country.name.official}
                </Link>
            </li>
        ))
    }       
    </ul>
)

export default CountriesList;
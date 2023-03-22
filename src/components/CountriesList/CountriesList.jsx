import './CountriesList.css'
import { Link } from 'react-router-dom'


export default function CountriesList({ list }) {
    return(
        <div className='CountriesList'>
            {
                list.map(country => (
                    <Link key={ country.alpha3Code } to={`/detail/${ country.alpha3Code }`}>
                        <div>
                            <img 
                            src={`https://flagpedia.net/data/flags/icon/72x54/${ country.alpha2Code.toLowerCase() }.png`}
                            alt={ country.name.common } 
                            />
                            <h1>{ country.name.common }</h1>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}
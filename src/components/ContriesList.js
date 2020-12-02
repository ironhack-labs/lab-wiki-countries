import { Link } from 'react-router-dom'
import './CountriesList.css'

const CountriesList = props => {
    return (
        <section className="list">
            <ul>
                {props.countries.map((elm, idx) => <li className='list-items' key={idx}><Link to={elm.cca3}>{elm.flag} {elm.name.common}</Link></li>)}
            </ul>
        </section>
    )
}

export default CountriesList
import { Link } from 'react-router-dom'


const CountriesList = ({countries}) => {
    return (
        <article className="col-5">
            <div className="list-group">
                {countries.map(elm => {
                    return (
                    <li key={elm.cca3} className="list-group-item list-group-item-action">
                        <Link to={elm.cca3} >{elm.flag}. {elm.name.common}</Link>
                    </li>
                )
            })}
            </div>
        </article>
    )
}

export default CountriesList




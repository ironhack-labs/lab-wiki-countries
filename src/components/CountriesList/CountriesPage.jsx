
import { Link, useParams } from 'react-router-dom'

const CountriesPage = ({ countries }) => {

    const { country_id } = useParams()


    return (
        <div className='container'>
            <h2 className='mt-3'>Countries</h2>
            {countries.map((country, idx) => {
                return (
                    <div className="card" key={idx}>
                        <div className="card-body" >
                            <h5 className="card-title">{country.name.official}</h5>
                            <Link to={`/${country.alpha3Code}`} className="card-link">Detalles</Link>
                            <hr />
                        </div>
                    </div>
                )
            })}
        </div>
    )


}

export default CountriesPage


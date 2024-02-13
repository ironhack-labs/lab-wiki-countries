import './CountryDetailsPage.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


function CountryDetails() {

    const { id } = useParams()

    const [countries, setCountries] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        loadCountries()
    }, [id])

    const loadCountries = () => {

        axios
            .get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
            .then(response => {
                setCountries(response.data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }
    return (

        <div className="CountryDetails">

            <h2>Country Details</h2>



            {
                isLoading
                    ?
                    <h2>Loading...</h2>
                    :
                    countries.map(cont => {

                        return (

                            <article className="CountryDetails" key={cont._id}>
                                <Link to={`/${cont._id}`}><p>{cont.name.common} {cont.capital}</p></Link>

                            </article>

                        )
                    })
            }

        </div>
    )
}

export default CountryDetails;

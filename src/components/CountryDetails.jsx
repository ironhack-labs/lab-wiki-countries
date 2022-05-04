import { useParams } from 'react-router-dom'

function CountryDetails({ countries }) {

    let { id } = useParams()

    useEffect(() => {
        filterCountries()
    }, [id])
    // un if dentro de un map, o sea un map y luego un if 
    countries.filter(id => {

        return (
            <h1>{id.name}</h1>
        )
    }
    )
}
export default CountryDetails;




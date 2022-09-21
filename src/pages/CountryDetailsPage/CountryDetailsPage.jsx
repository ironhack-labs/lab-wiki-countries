import DetailCountry from "../../components/DetailCountry/DetailCountry"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const CountryDetails = ({ countries, axios }) => {
    const [newCountry, setNewCountry] = useState({})
    const { code } = useParams()

    useEffect(() => {
        axios.findCountry(code)
            .then((foundCountry) => {
                console.log(foundCountry)
                setNewCountry(foundCountry)
            })
            .catch((err) => console.log(err))
    }, [code])

    console.log(newCountry)


    return (
        <>
            <div className="col-7">
                <DetailCountry country={newCountry} countries={countries} />
            </div>
        </>
    )
}



export default CountryDetails
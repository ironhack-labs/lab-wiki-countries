import {useParams} from 'react-router-dom'
import {CountryDetails} from '../../components'
import {useState, useEffect} from 'react'
import axios from 'axios'

function Home(props){
    const params = useParams()

    const [countryData, setCountryData] = useState({})
    const [isLoader, setIsLoader] = useState(true)
    
    useEffect(()=>{
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${params.country}`)
        .then(data => {
            setCountryData(data.data)
            setIsLoader(false)
        })
        .catch(err => {
            console.log(err)
        })
    },[params.country])

    return (
        <div className="container">
            <div className="row">
                {!isLoader && <CountryDetails countryData={countryData}/> }
            </div>
        </div>        
    )
}

export default Home;
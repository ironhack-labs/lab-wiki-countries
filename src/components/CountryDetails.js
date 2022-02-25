import {useParams, Link} from "react-router-dom"
import {useState, useEffect} from "react"
import axios from "axios"
const CountryDetails = () => {
    
    let {alpha3Code} = useParams()
    //find country from code
    const [countryToDisplay, setCountryToDisplay] = useState(null)
    useEffect(() => {
        setCountryToDisplay(null)
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`).then(results => {
            setCountryToDisplay(results.data)
        })
    }, [alpha3Code])
    

    return countryToDisplay ? 
        <div className="col-7">
            <h1>{countryToDisplay.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                    <td style={{width: "30%"}}>Capital</td>
                    <td>{countryToDisplay.capital[0]}</td>
                    </tr>
                    <tr>
                    <td>Area</td>
                    <td>
                        {countryToDisplay.area} km
                        <sup>2</sup>
                    </td>
                    </tr>
                    <tr>
                    <td>Borders</td>
                    <td>
                        <ul>
                        {countryToDisplay.borders.map(border => <li key={border}><Link to={`/${border}`}>{border}</Link></li>)}
                        </ul>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div> 
        :
        <div className="col-7">
            <h1>loading the country... one sec</h1>
        </div>  

    
}

export default CountryDetails 
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"


function CountryDetails(props){
    const {countries, setCountries} = props
    const { countryId } = useParams()
    const [borders, setBorders] = useState([])

    const copyOfCountries = [...countries]
    console.log(countries)
    let filteredArray = copyOfCountries.find(country=>{
        return  country.alpha3Code === countryId
    })

    useEffect(()=>{
        setBorders(filteredArray.borders)
        console.log("borders set after loading" + borders)
    }, [filteredArray.borders, borders])
    
    return(
        <div>   
        <div className="country-unique">
            <img className="border" width={150} src={"https://flagsapi.com/" + filteredArray.alpha2Code +"/flat/64.png"}/>
            <div className="flex">
                <h3>Capital: </h3>
                <h3>{filteredArray.capital}</h3>
            </div>
            <div className="flex">
                <h3>Area: </h3>
                <h3>{filteredArray.area} km²</h3>
            </div>
            <div className="flex">
                <h3>Borders:</h3>
                <h3>
                    <ul>{borders.map((country)=> <li className="list"><Link to={"/"+ country}> {country}</Link></li> )} </ul>
                </h3>
            </div>
        </div>
      

        </div>
    )
}

export default CountryDetails
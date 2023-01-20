import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


function CountryDetails(props){
    const {countries, setCountries} = props
    const { countryId } = useParams()
    const [borders, setBorders] = useState([])
    console.log("2nd page" + countryId)

    const copyOfCountries = [...countries]
    console.log(countries)
    let filteredArray = copyOfCountries.find(country=>{
        return  country.alpha3Code === countryId
    })
    console.log("borders" + filteredArray.borders)

    useEffect(()=>{
        setBorders(filteredArray.borders)
        console.log("borders set after loading" + borders)
    }   )
    
    return(
        <div>
        <div className="country-unique" width={500}>
            <img className="border" width={150} src={"https://flagsapi.com/" + filteredArray.alpha2Code +"/flat/64.png"}/>
            <div>
                <h3>Capital: </h3>
                <h3>{filteredArray.capital}</h3>
            </div>
            <div>
                <h3>Area: </h3>
                <h3>{filteredArray.area} km²</h3>
            </div>
            <div>
                <h3>Borders:</h3>
                <h3>
                    <ul>{borders.map((country)=> <li> {country}</li>)}</ul>
                </h3>
            </div>
        </div>
      

        </div>
    )
}

export default CountryDetails
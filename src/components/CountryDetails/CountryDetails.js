import React from "react";
import countries from "../../countries.json"
import {Route,useParams,Link} from "react-router-dom"


function CountryDetails(){
    const initialState = {
        name: "",
        capital:"",
        area: null,
        borders:[],
    }
    const [uniqueCountry, setUniqueCountry] = React.useState(initialState)
    const {country} = useParams();
    React.useEffect(()=>{
        const countryDetails = countries.find(
            (OneCountry) => OneCountry.cca3 === country
        )
        if(countryDetails){
            setUniqueCountry({
                name: countryDetails.name.official,
                capital: countryDetails.capital,
                area: countryDetails.area,
                borders: countryDetails.borders
            })
        }
    },[country])
    return(
        <div className="card" style={{margin:"0 auto", width:"600px",maxHeight:"500px"}}>
            <h1 className="card-title card-header text-center">{uniqueCountry.name}</h1>
            <div className="card-body">
                <p className="card-title">Capital: {uniqueCountry.capital}</p>
                <p className="card-title">Area: {uniqueCountry.area}</p>
                <div>
                    <p>Borders:</p>
                    <ul className="list-group list-group-flush">
                        {uniqueCountry.borders.map((item,idx)=>{
                            const country = countries.find(
                                (Onecountry) => Onecountry.cca3 === item
                            )
                            return (
                                <Link to={`/${item}`}>
                                    <li className="list-group-item card-link" key={idx}>{country.name.official}</li>
                                </Link>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}



export default CountryDetails;
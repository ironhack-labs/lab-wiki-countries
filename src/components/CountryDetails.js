import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
//import countries from "../countries.json";

function CountryDetails (props){
    const [foundCountry, setFoundCountry] = useState(null);
    const [neighbourList, setNeighbourList] = useState([]);

    const { countryId } = useParams();
    const { countries } = props;
    
    useEffect(()=>{
        axios.get('https://ih-countries-api.herokuapp.com/countries/' + countryId)
        .then( (res) => {
            setFoundCountry(res.data);
            if(res.data.borders.length){
                let newNeighbour = {};
                let newNeighbourList = [];

                res.data.borders.forEach((neighbourId)=>{
                    newNeighbour = countries.find((country)=> {
                        return country.alpha3Code === neighbourId
                    });

                    newNeighbourList.push(newNeighbour);
                })
                setNeighbourList([...newNeighbourList]);
            }
        })
        .catch(err => console.log(err))
    },[countryId]);

    return (
        <div>
            { !foundCountry && <h2>Country Not Found!</h2> }

            { foundCountry && (
                <div class="col-7 p-5">
                    <img src={"https://flagpedia.net/data/flags/icon/72x54/" + foundCountry.alpha2Code.toLowerCase() + ".png"} alt="flag" style={{height:200}}/>
                    <h1>{foundCountry.name.common}</h1>
                    <table class="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{width: "30%"}}>Capital</td>
                            <td>{foundCountry.capital[0]}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>
                                {foundCountry.area} km
                                <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            { !foundCountry.borders.length ? null : 
                            (<td>
                                <ul>
                                    {foundCountry.borders.map((countryCode, index) => (
                                        <li>
                                            <Link to={"/" + countryCode}> 
                                                {neighbourList[index].name.common} 
                                            </Link>
                                        </li>
                                    )
                                    )}
                                </ul>
                            </td>
                            )}
                        </tr>
                    </tbody>
                    </table>
                </div> 
            )}
        </div>
    )
}

export default CountryDetails;
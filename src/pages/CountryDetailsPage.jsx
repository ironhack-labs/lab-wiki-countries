import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const CountryDetailsPage = () =>{

        const {alpha3Code} = useParams()
        const [countryDetail, setcountryDetail] = useState(null);

        useEffect(() => {
            
            axios.get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`).then((response) => {
                setcountryDetail(response.data);
                
              }).catch((error) => {
                console.log(error);
              });
        }, [alpha3Code])

        if (countryDetail === null){
            return (<p>loading ...</p>)
        }

    return(

        <div className="container">
        <p style={{fontSize: "24px", fontWeight: "bold"}}>Countries Details</p>
                <p><img src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetail.alpha2Code.toLowerCase()}.png`}/></p>
                 <h1>{countryDetail.name.common}</h1>
                <table className="table">
                <thead></thead>
                <tbody>
                    
                    
                    
                    <tr>
                    <td style={{width: "30%"}}>capital</td>
                    <td>{countryDetail.capital}</td>
                    </tr>
                    <tr>
                    <td>Area</td>
                    <td>
                        {countryDetail.area} km
                        <sup>2</sup>
                    </td>
                    </tr>
                    <tr>
                    <td>Borders</td>
                    <td>
                    <ul style={{listStyle: "none"}}>
                    {countryDetail.borders.map((e,idx) => {
                        return (
                            <>
                            <li key={idx}><Link className="list-group-item list-group-item-action active" to={`/${e}`}>{e}</Link></li>
                            </>
                        );
                    })}
                        </ul>
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>

     
    )
}

export default CountryDetailsPage;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



function CountryDetails(props) {
    const {countriesArray} = props;
    const [details, setDetails] = useState("");

    const { alphaCode } = useParams();
    useEffect(()=>{
        setDetails(countriesArray.find((elm) => elm.alpha3Code === alphaCode))
        
    })
    

    return (
        <div>          
            <h1>Name: {details.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: 30 + '%' }}>Capital</td>
                        <td>{details.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {details.area} km
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                <li><a href="/AND">Andorra</a></li>
                                <li><a href="/BEL">Belgium</a></li>
                                <li><a href="/DEU">Germany</a></li>
                                <li><a href="/ITA">Italy</a></li>
                                <li><a href="/LUX">Luxembourg</a></li>
                                <li><a href="/MCO">Monaco</a></li>
                                <li><a href="/ESP">Spain</a></li>
                                <li><a href="/CHE">Switzerland</a></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CountryDetails
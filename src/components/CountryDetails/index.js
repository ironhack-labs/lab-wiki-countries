import {Link} from 'react-router-dom'

function CountryDetails(props){
    return (
        <div className="col-7">
            <h1>{props.countryData.name.common}</h1>
            <table className="table">
            <thead></thead>
            <tbody>
                <tr>
                    <td  style={{width: "30%"}}>Capital</td>
                    <td>{props.countryData.capital[0]}</td>
                </tr>
                <tr>
                    <td>Area</td>
                    <td>{props.countryData.area} km<sup>2</sup></td>
                </tr>
                <tr>
                    <td>Borders</td>
                    <td>
                    <ul>
                        {props.countryData.borders.map((country, index)=>(<li key={index}><Link to={`/${country}`}>{country}</Link></li>))}
                    </ul>
                    </td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}

export default CountryDetails;
import { useParams } from "react-router-dom";

function CountryDetails(props) {

    const { countryCode } = useParams();
    const country = props.countries.find(country => country.alpha3Code === countryCode);

    return (
        <div>
            <img src="" alt={ `Flag ${country.name.common}` }/>
            <h1>{country.name.common}</h1>
            <table className="table">
                <tbody>
                    <tr>
                        <td>Capital</td>
                        <td> 
                            <ul className="list-unstyled">
                                { country.capital.map(city => <li> { city } </li>) }
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{ country.area }</td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul className="list-unstyled">    
                                { country.borders.map(code => <li> { code } </li>) }
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

}

export default CountryDetails;
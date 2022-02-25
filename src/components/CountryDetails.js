import { useParams, Link } from "react-router-dom";

function CountryDetails(props) {

    const { countryCode } = useParams();
    const country = props.countries.find(country => country.alpha3Code === countryCode);

    return (
        <div className="w-50 mx-5">
            <img 
                src={ `https://flagpedia.net/data/flags/icon/216x162/${country.alpha2Code.toLowerCase()}.png` } 
                alt={ `Flag ${country.name.common}` }
            />
            <h1>{country.name.common}</h1>
            <table className="table">
                <tbody>
                    <tr>
                        <td>Capital</td>
                        <td> 
                            <ul className="list-unstyled mb-0">
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
                            <ul className="list-unstyled mb-0">    
                                { 
                                    country.borders.map(code => {
                                        return (
                                            <li> 
                                                <Link to={ `/${code}` }>
                                                    { props.countries.find(country => country.alpha3Code === code).name.common } 
                                                </Link>
                                            </li>
                                        )
                                    }) 
                                }
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

}

export default CountryDetails;
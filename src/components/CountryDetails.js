import {Link,useParams} from 'react-router-dom'


const CountryDetails = (props) => {
    let {countryId} = useParams()
    return(
        <div>
            {props.countries.filter(element => element.alpha3Code === countryId ).map(
                element => {
                    return (
                        <div className='col-7'>
                            <h1>{element.name.common}</h1>
                            <table className='table'>
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td style={{width: '30%'}}>Capital</td>
                                        <td>{element.capital}</td>
                                    </tr>
                                    <tr>
                                        <td>Area</td>
                                        <td>
                                            {element.area}
                                            <sup>2</sup>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Borders</td>
                                        <td>
                                            <ul>
                                                {element.borders.map(element => <li><Link to={`/country-details/${element}`}>{element}</Link></li>)}
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )
                }
            )
            }
        </div>
        
    )
}

export default CountryDetails
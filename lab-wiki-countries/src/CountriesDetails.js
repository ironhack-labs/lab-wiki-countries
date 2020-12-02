import countries from './countries.json'
import { Link } from 'react-router-dom';


function details(props) {
  
    const cityDetails = countries.find(elm => elm.cca3 === props.match.params.cca3)

    return (

        <div className="col-7">
            <h1>{cityDetails.name.common}</h1>
        <table className="table">
            <thead></thead>
            <tbody>
                <tr>
                    <td styles="width: 30%;">Capital</td>
                        <td>{cityDetails.capital}</td>
                </tr>
                <tr>
                    <td>Area</td>
                        <td>{cityDetails.area} km
                  <sup>2</sup>
                    </td>
                </tr>
                <tr>
                    <td>Borders</td>
                        <td>
                            <ul>
                                
                                {cityDetails.borders.map((elm) =>
                                    
                                    <li><Link to={elm}>{elm}</Link></li>)
                                
                                }
                                
                            </ul>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    )

}

export default details;

import countries from './../countries'
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {



    const getCountryDetails = (cca3) => {

        const getCountryDetails = eachCountry => {

            return eachCountry.cca3 === cca3;
        }
        return countries.find(getCountryDetails)
    };

    const { params } = props.match;
    const selectedCountry = getCountryDetails(params.cca3, 10);



    return (

        <div className="col-7">
            <h1>{selectedCountry.name.official}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr >

                        <td >Capital</td>
                        <td>{selectedCountry.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {selectedCountry.area}
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            {selectedCountry.borders.map(elm => <ul>

                                <li><Link to={elm} >{ elm}</Link></li>
                            

                            </ul> 
                               

                            )}
                          
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    )

}

export default CountryDetails
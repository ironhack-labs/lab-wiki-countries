
function CountryDetails(country) {
    return (
        <div className="col-7">
            
                <h1>{country.capital}</h1>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{ "width": 30 + "%" }}>{country.capital}</td>
                            <td>{country.capital}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>{country.area} km <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>    
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
 

        </div>

    )
}

export default CountryDetails;
const CountryDetails = (props) => {
    
    const currentCountry = props.countries.filter(elm => elm.cca3 === props.match.params.id)
    const borderCountries = props.countries.filter(elm => currentCountry[0].borders.includes(elm.cca3))
        
    console.log(borderCountries)
    return (
        <>
            <h1>{currentCountry[0].name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                    <td>Capital</td>
                    <td>{currentCountry[0].capital}</td>
                    </tr>
                    <tr>
                    <td>Area</td>
                    <td>
                        {currentCountry[0].area} km
                        <sup>2</sup>
                    </td>
                    </tr>
                    <tr>
                    <td>Borders</td>
                    <td>
                        <ul>
                        {borderCountries.map((elm, idx) => {
                            return (
                                <li key = {idx}><a href={"/" + elm.cca3}>{elm.name.common}</a></li>
                            )
                        })}
                        </ul>
                    </td>
                    </tr>
                </tbody>
                </table>
            </>
    )
}

export default CountryDetails
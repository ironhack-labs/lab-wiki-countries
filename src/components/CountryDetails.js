export default function CountryDetails(props) {

    const name = props.match.params.name

    const {fullList} = props

    const country = fullList.find((el) => el.name.common === name)

    return (
        <div className="rightSide">
            <h1>{country.name.common}</h1>
            <table>
                <tr>
                    <td>Capital(s)</td>
                    <td>
                        <ul>
                            {country.capital.map((cap) => {
                                return <li>{cap}</li>})}
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>Area</td>
                    <td>{country.area} sq. km</td>
                </tr>
                <tr>
                    <td>Borders</td>
                    <td>
                        <ul>
                        {country.borders.map((neighbor) => {
                            return <li>{neighbor}</li>})}
                        </ul>
                    </td>
                </tr>
            </table>
        </div>
    )
}

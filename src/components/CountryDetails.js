export default function CountryDetails(props) {

    const name = props.match.params.name

    const {fullList} = props

    const country = fullList.find((el) => el.name.common === name)

    return (
        <div className="rightSide">
            <h1>{country.name.common}</h1>
            <table className="myTable">
                <tr>
                    <td className="leftCol">Capital(s)</td>
                    <td className="rightCol">
                        {country.capital.map((cap) => {
                            return <p className = "par">{cap}</p>})}
                    </td>
                </tr>
                <tr>
                    <td className="leftCol">Area</td>
                    <td className="rightCol">{country.area} sq. km</td>
                </tr>
                <tr>
                    <td className="leftCol">Borders</td>
                    <td className="rightCol">
                        {country.borders.map((neighbor) => {
                            return <p className = "par">{neighbor}</p>})}
                    </td>
                </tr>
            </table>
        </div>
    )
}

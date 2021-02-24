import { Link } from 'react-router-dom'


const CountryDetails = (props) => {

    const cca3 = props.match.params.cca3

    const [selectedContry] = props.countries.filter(elm => elm.cca3 === cca3)

    return (
        <div className="col-7">
            <h1>{selectedContry.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: '30%' }}>Capital</td>
                        <td>{selectedContry.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {selectedContry.area} km
                    <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {selectedContry.borders.map((elm, i) => {
                                    let bordercca3 = elm
                                    let countryName
                                    props.countries.map(elm => { if (elm.cca3 === bordercca3) { countryName = elm.name.common } })
                                    return <li><Link to={elm} key={i}>{countryName}</Link></li>
                                })}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div >
    )
}

export default CountryDetails
import Countries from '../countries.json'
import queryString from 'query-string'
import BorderLi from './BordersLi'


const CountryDetails = props => {

    const urlCode = queryString.parse(props.location.search).code

    const [foundCountry] = Countries.filter(elm => elm.cca3 === urlCode)

    const borders = Countries.filter(elm => foundCountry.borders.includes(elm.cca3))

    return (
        <>
            <h1>{foundCountry.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: '30%' }}>Capital</td>
                        <td>{foundCountry.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{foundCountry.area} km
                    <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {borders.map((border, idx) => <BorderLi key={idx} code={border.cca3} name={border.name.common} />)}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default CountryDetails
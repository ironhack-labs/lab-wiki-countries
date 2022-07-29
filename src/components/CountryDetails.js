import { Link, useParams } from "react-router-dom";


function CountryDetails(props) {
    const { countryId } = useParams();

    const matchingCountry = props.data.filter(e => {
        return e.alpha3Code === countryId
    })

    const borders = matchingCountry[0].borders;
    console.log(borders)
    const bordersNames = (e) => {
        const filtered = props.data.filter(el => {
            return el.alpha3Code === e
        })
        return filtered[0].name.common;
    }

    const bordersFlags = (e) => {
        const filtered = props.data.filter(el => {
            return el.alpha3Code === e
        })
        return filtered[0].alpha2Code;
    }

    return (
        <div>

            <div className="col-7" style={{ margin: '0' }}>
                <h1>{matchingCountry[0].name.common}</h1>
                <table className="table" >
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{ width: '30%' }}>Capital</td>
                            <td>{matchingCountry[0].capital[0]}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>
                                {matchingCountry[0].area} km
                                <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    {borders.map(e => {
                                        return (
                                            <li>
                                                <Link to={"/" + e}>{bordersNames(e)}</Link>
                                                {console.log(e)}
                                                <img src={`https://flagpedia.net/data/flags/icon/72x54/${bordersFlags(e).toLowerCase()}.png`} alt="flag" style={{ width: '8%' }} />
                                            </li>
                                        )
                                    })}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default CountryDetails;




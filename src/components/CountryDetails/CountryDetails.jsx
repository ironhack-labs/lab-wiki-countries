import { NavLink } from "react-router-dom"


function CountriesDetails({ country, filterCountry }) {

    const { name: countryName,
        alpha2Code,
        alpha3Code,
        capital,
        region,
        languages,
        area,
        borders } = country
    const { common: name } = countryName
    const languagesArr = []
    for (let key in languages) {
        languagesArr.push(key)
    }
    return (
        <div className="col-7">
            <h1>{name}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: '30%' }}>Capital</td>
                        <td>{capital}</td>
                    </tr>
                    <tr>
                        <td style={{ width: '30%' }}>Region</td>
                        <td>{region}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {area} km
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {borders.map((border, i) =>
                                    <li key={`${border}BRD`}>
                                        <NavLink to={`/${border}`} onClick={() => filterCountry(border)}>{border}</NavLink>
                                    </li>
                                )}


                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Languages</td>
                        <td>
                            <ul>
                                {languagesArr.map(language =>
                                    <li key={language}>
                                        <p>{languages[language]}</p>
                                    </li>
                                )}


                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div >
    );
}

export default CountriesDetails;

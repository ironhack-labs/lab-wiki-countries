import { useParams } from 'react-router-dom';

export default function CountriesDetails({countries}) {

    const {countryCode} = useParams();

    const selectedCountry = countries.filter(c => c.alpha3Code === countryCode)[0]

    console.log("selectedCountry.borders", selectedCountry.borders);

    return (<div className="col-7">
        <h1>{selectedCountry.name.common}</h1>
        <table className="table">
        <thead />
        <tbody>
            <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>{selectedCountry.capital.join(",")}</td>
            </tr>
            <tr>
            <td>Area</td>
            <td>
            {selectedCountry.area} km
                <sup>2</sup>
            </td>
            </tr>
            <tr>
            <td>Borders</td>
            <td>
                <ul>
                {countries.filter(c => selectedCountry.borders.includes(c.alpha3Code)).map(b => <li>
                    <a href={`/${b.alpha3Code}`}>{b.name.common}</a>
                </li>)}

                </ul>
            </td>
            </tr>
        </tbody>
        </table>
        </div>)
}
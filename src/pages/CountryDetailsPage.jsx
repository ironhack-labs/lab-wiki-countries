import Navbar from "../components/Navbar";
import { useContext } from "react"
import { DataContext } from "../context/Data.context"
import { Link, useParams } from "react-router-dom"

function CountryDetails() {
    const { allData, setAllData } = useContext(DataContext)
    const { countryId } = useParams()

    console.log("Country ID:", countryId);
    console.log("All Data:", allData);

    if (!allData || allData.length === 0) {
        return (
            <div className="container">
                <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Country Details</p>
                <h1>Loading data...</h1>
            </div>
        );
    }

    const detailsCountries = allData.find((eachCountry) => eachCountry._id === countryId)

    if (!detailsCountries) {
        return (
            <div className="container">
                <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Country Details</p>
                <h1>Country not found!</h1>
            </div>
        );
    }


    return (
        <>
            <Navbar />
            <div className="container">
                <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Country Details</p>
                <h1>{detailsCountries.name.common}</h1>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{ width: '30%' }}>Capital</td>
                            <td>{detailsCountries.capital[0]}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>{detailsCountries.area} km
                                <sup>{detailsCountries.latlng[1]}</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    {detailsCountries.borders.length > 0 ? (
                                        detailsCountries.borders.map((borderCode, i) => {
                                            const borderCountry = allData.find(country => country.alpha3Code === borderCode);
                                            const borderName = borderCountry ? borderCountry.name.common : borderCode;

                                            return (
                                                <li key={borderCode}>
                                                    <Link to={`/${borderCountry._id}`}>
                                                        {borderName}
                                                    </Link>
                                                </li>
                                            )
                                        })

                                    ) : (
                                        <li>No Borders</li>
                                    )
                                    }
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default CountryDetails;

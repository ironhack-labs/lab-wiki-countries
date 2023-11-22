import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const API_URL = 'https://ih-countries-api.herokuapp.com'

function CountryDetailsPage() {
    const { countryId } = useParams()
    const [countryDetails, setCountryDetails] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)

        axios.get(`${API_URL}/countries/${countryId}`)
            .then(response => {
                setCountryDetails(response.data)
                setIsLoading(false)
            })
            .catch(error => {
                console.error('Error', error)
            })
    }, [countryId])

    const titleStyle = {
        fontSize: '24px',
        fontWeight: 'bold'
    }

    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse'
    }

    const tdStyle = {
        width: '30%'
    }

    return (
        <div className="container">
            {isLoading ? (
                <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Loading...</p>
            ) : (
                <div>
                    <p style={titleStyle}>Country Details</p>
                    <h1>{countryDetails.name?.common}</h1>
                    <table className="table" style={tableStyle}>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td style={tdStyle}>Capital</td>
                                <td>{countryDetails.capital}</td>
                            </tr>
                            <tr>
                                <td>Area</td>
                                <td>
                                    {countryDetails.area} km<sup>2</sup>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default CountryDetailsPage
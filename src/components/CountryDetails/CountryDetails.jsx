import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchCountries } from './../../services/countries-services';

export default function CountryDetails() {
    const { code } = useParams()
    const [countryDetail, setDetails] = useState(null)

    const getCountryDetails = useCallback( async () => {
        const details = await fetchCountries(code)
        setDetails(details)
    }, [code])

    useEffect(() => {
        getCountryDetails()
    }, [getCountryDetails])

  return (
    <div className="countryDetails">
        {
            countryDetail ? 
            (
            <div className="detail">
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetail.alpha2Code.toLowerCase()}.png`} alt="flag" width="120px" />
                <h2>{countryDetail.name.common}</h2>
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td><strong>Capital:</strong></td>
                            <td>{countryDetail.capital[0]}</td>
                        </tr>
                        <tr>
                            <td><strong>Area:</strong></td>
                            <td>{countryDetail.area} km <sup>2</sup></td>
                        </tr>
                        <tr>
                            <td><strong>Borders:</strong></td>
                            <td>{countryDetail.borders.map((border) => (
                                <p key={border}>{border}</p>
                            ))}</td>
                        </tr>
                    </tbody>
                </table>
            </div>)
            :
            <p>Loading details...</p>
        }
    </div>
  )
}

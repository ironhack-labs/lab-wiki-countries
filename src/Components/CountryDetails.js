import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import countries from '../countries.json'
import {Link} from 'react-router-dom'


export default function CountryDetails() {

    const [country, setCountry] = useState(null)

    const { theCountry } = useParams()

    console.log('country', country)
    
    console.log('countries',countries)

    useEffect(() => {
        console.log('use effect called')
        const filter = () => {
            const foundedCountry = countries.filter(e => {
                return e.cca3 === theCountry
            })
            console.log('filter', foundedCountry)
            setCountry(foundedCountry[0])
            console.log('founded country', country)
        }
        
        filter()
    },[country, theCountry])

    return (
        <>
        <div className='m-4 border rounded h-100 p-4 w-50 text-center'>     
            <div>
            {
                country === null?(
                    <p>null country</p>
                    ):(
                        <div>
                            <h1 className='border-bottom pb-4'>{country.name.common}</h1>
                            <p className='border-bottom pb-3'>Capital: {country.capital[0]}</p>
                            <p className='border-bottom pb-3'>Area: {country.area}km2</p>
                            <ul className=''>
                            {
                                country.borders.map((e) => {
                                    return (
                                        <Link to={`/${e}`}>
                                            <li>{e}</li>
                                        </Link>
                                        )
                                    })
                            }
                            </ul>
                        </div>
                    )
            }

            </div>
        </div>
        </>
    )
}

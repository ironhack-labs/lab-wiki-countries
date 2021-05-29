import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'

export default function CountriesList(props) {
    const {countries} = props
    console.log('list', countries)

    const [country, setCountry] = useState()
    
    return (
        <div className='modal-scrollable-area mt-4' style={{width: '30%'}}>
            {
                countries.map((e, i) => {
                    return(
                        <div className='border p-2'>
                        
                            <Link key={i} to={`/${e.cca3}`}>
                                <div className='d-flex justify-content-center'>
                                    <img style={{width: '20px', height:'20px'}}src={`https://www.countryflags.io/${e.cca2}/flat/64.png`}/>
                                    <p className='px-2'>{e.name.common}</p>
                                </div>
                            </Link> 
                        </div>
                    )
                })
            }
        </div>
    )
}

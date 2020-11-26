import React from 'react'
import CountriesList from './CountriesList'
import CountryDetails from './CountryDetails'

export default function LifeCycle(){
    const [showDetail, setShowDetail] = useState(false)

    return (
        <div>
            <CountryDetails/>
            <CountriesList onClick={() => setShowDetail(!showDetail)} />
        </div>
    )
}
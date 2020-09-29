import React from 'react'
import CountriesList from './CountriesList'
import CountryDetails from './CountryDetails'
import countries from '../countries.json'

const Index = (props) => {
    return (
        <>
            <div className="col-4 countries-list">
                <CountriesList countries={countries} />
            </div>
            <div className="col-7 countries-detail">
                <CountryDetails countries={countries} country={props.match.params.country}/>
            </div>
        </>
    )
}

export default Index

// import React, { useState } from 'react'
// import CountriesList from './CountriesList'
// import CountryDetails from './CountryDetails'
// import countries from '../countries.json'
// import { useSpring, animated as a } from 'react-spring'

// const Index = (props) => {
//     const [flipped, set] = useState(false)
//     const { transform, opacity } = useSpring({
//         opacity: flipped ? 1 : 0,
//         transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
//         config: { mass: 5, tension: 500, friction: 80 }
//       })

//     return (
//         <div onClick={() => set(state => !state)}>
//             <a.div className="col-12 countries-list" style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
//                 <CountriesList countries={countries} />
//             </a.div>
//             <a.div className="col-12 countries-detail" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`)}}>
//                 <CountryDetails countries={countries} country={props.match.params.country}/>
//             </a.div>
//         </div>
//     )
// }

// export default Index


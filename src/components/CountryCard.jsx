import React from 'react'
import { Card } from "antd"
import { Link } from 'react-router-dom'


function CountryCard({  name, flag }) {
    return (
		<Link to={`countrydetails/${name}`} >
			<Card className='card' key={name} hoverable style={{ width: 300 }}>
				<img className='flag' src={flag} alt={name} style={{width:"100px"}}></img>
				<p>{name}</p>
			</Card>
		</Link>
	)
	
}

export default CountryCard
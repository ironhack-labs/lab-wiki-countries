import React from 'react'
import Card from "react-bootstrap/Card"
import {Link} from "react-router-dom"

export default props => (
            
            <Link to = {`/country/${props.country.cca3}`}>
            <Card className= "d-flex flex-row align-items-center"  style = {{ height:"3rem" }}>
                
        <Card.Img style = {{ width:"3rem" }} src={`https://www.countryflags.io/${props.country.cca2}/flat/64.png`}
        />

        <Card.Body>
            <Card.Title>
                {props.country.name.common}
            </Card.Title>

        </Card.Body>



        </Card>
            </Link>
    )



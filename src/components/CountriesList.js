import React from 'react'
import {Card,ListGroup} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function CountriesList(props) {
    return (
        <div className="position-sticky">
            <Card style={{ width: '18rem' }}>
                <ListGroup variant="flush">
                    {
                        props.countriesList.map((country,i)=>{
                            return <ListGroup.Item key={i}><Link to={`/country/${country.cca3}`}>{country.name.common}</Link></ListGroup.Item>
                        })
                    } 
                </ListGroup>
            </Card>
        </div>
    )
}

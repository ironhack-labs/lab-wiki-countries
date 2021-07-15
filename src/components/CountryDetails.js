import countries from './countries.json'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CountryDetails = (props) => {
    // console.log(props.match.params.cca3)
    // console.log(countries[0].cca3)
    let country = countries.filter(country => country.cca3 === props.match.params.cca3)[0]
    // console.log(country)
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title> {country.name.official}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Capital: {country.capital}</Card.Subtitle>
                <Card.Text>Area: {country.area} km2</Card.Text>
                <Card.Text>Flag: {country.flag}</Card.Text>
                <ListGroup className="list-group-flush">
                    {
                        country.borders?.length > 0
                            ?
                            country.borders.map((border, index) =>

                                < div >
                                    <ListGroupItem>
                                        <Link to={`/country/${border}`}>{border}</Link>
                                    </ListGroupItem>
                                    <br></br>
                                </div>
                            )
                            :
                            <ListGroupItem>
                                <h5>Edenic island: no neighbours.</h5>
                                <Link to={`/country`}>Back to Countries</Link>
                            </ListGroupItem>

                    }
                </ListGroup>
            </Card.Body>
        </Card >
    )
}



export default CountryDetails
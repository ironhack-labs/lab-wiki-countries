import countries from './countries.json'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

const CountryDetails = (props) => {
    console.log(props.match.params.cca3)
    console.log(countries[0].cca3)
    let country = countries.filter(country => country.cca3 === props.match.params.cca3)[0]
    console.log(country)
    const route = "/country/" + country.cca3
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{country.name.official}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Capital: {country.capital}</Card.Subtitle>
                <Card.Text>Area: {country.area} km2</Card.Text>
                <ListGroup className="list-group-flush">
                    {country.borders?.length > 0 ? country.borders.map((border, index) =>
                        <div key={index}>
                            <ListGroupItem>{border}</ListGroupItem>
                            {/* <ListGroupItem>{border}</ListGroupItem> */}
                            <br></br>
                        </div>
                    ) : null}
                </ListGroup>
            </Card.Body>
        </Card>
    )
}

export default CountryDetails
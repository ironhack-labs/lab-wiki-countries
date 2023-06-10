 import Container from 'react-bootstrap/Container';
 import Row from 'react-bootstrap/Row';
 import Col from 'react-bootstrap/Col';
 import Card from 'react-bootstrap/Card';
 import { Link } from 'react-router-dom';

function CountriesList(props){
    return (
      <div style={{ overflowY: 'auto', height: ' 95vh', overflowX: 'hidden' }}>
        <Row>
          {props.countries.map((country) => {
            return (
              <div  key={country.alpha3Code}>
                <Link to={`/${country.alpha3Code}`}>
                  <Col>
                    <Card>
                      <Card.Body>
                        <img
                          src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                          alt="flag"
                        />
                        <p>{country.name.official}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                </Link>
              </div>
            );
          })}
        </Row>
      </div>
    );
}

export default CountriesList; 
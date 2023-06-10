import CountriesList from "../components/CountriesList"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { useEffect, useState } from 'react';

const API_URL = "https://ih-countries-api.herokuapp.com/countries"


function Main(){
    const [countries, setCountries] = useState([])

    useEffect(() => {
      const getData = async () => {
        const res = await axios.get(API_URL);
        setCountries(res.data);
      };
      getData();
    }, []);

    return (
      <div style={{overflowX: 'hidden' }}>
        <Row>
          <Col xs lg="5">
            <CountriesList countries={countries} />
          </Col>
          
        </Row>
      </div>
    );

}

export default Main
import "./App.css"
import Navbar from "./components/Navbar"
import CountriesList from "./components/CountriesList"
import CountryDetails from "./components/CountryDetails"

import { Routes, Route } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Row>
          <Col xs={5}>
            <CountriesList />
          </Col>
          <Col xs={7}>
            <Routes>
              <Route path="/:countryID" element={<CountryDetails />} />
              <Route path="*" element={<h1>404</h1>} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default App
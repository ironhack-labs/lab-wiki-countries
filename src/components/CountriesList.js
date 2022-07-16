import React from "react";
import { Link } from 'react-router-dom'
// import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';

const CountriesList = ({countries}) => {
  return (
    <div>
    {countries.map(country => {
      return (
        
        <div className="container" key={country.alpha3Code}>
          <div className="card col-10 ">
          <div className="row justify-content-md-center mt-2">
            <div className="col-12 mt-2">
              <div className="list-group">
              <Link to={`/${country.alpha3Code}`}>
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="flag" />
                <h6 className="card-title mt-2">{country.name.official}</h6>
              </Link>
              </div>
            </div>
          </div>
          </div>
        </div>

    // <Card className="mt-3"  style={{ width: '18rem' }} >
    //   <Row className="justify-content-md-center">
    //   <Link to={`/${country.alpha3Code}`}>
    //   <Card.Img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} style={{ width: '5rem' }} className="alig-items-center"/>
    //   </Row>
    //   <Card.Body>
    //     <Card.Title>{country.name.official}</Card.Title>
    //     <Card.Text>
    //       Some quick example text to build on the card title and make up the
    //       bulk of the card's content.
    //     </Card.Text>
    //   </Card.Body>
    //   </Link>
    // </Card>
    



    // <div key={country.alpha3Code}>
    //   <div className="container card col-3" >
    //     <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="flag" height="40px" width="40px" className="d-inline align-center text-white"/>
    //     <div className="card-body">
    //       <Link to={`/countriesList/${country.alpha3Code}`}>
            
    //         <h5 className="card-title">{country.name.official}</h5>
    //       </Link>
    //     </div>
    //   </div>
    // </div> 
    );
    })}
  </div>
  )
}

export default CountriesList;

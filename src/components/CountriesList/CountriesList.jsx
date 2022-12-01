import { ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import Flag from "react-world-flags"

const CountriesList = ({ countries }) => {

    return (
        <ListGroup className="col-6 mt-5">
            {
                countries.map((country) => {
                    return (
                        <ListGroup.Item key={country._id}><Link to={country.alpha3Code}><Flag code={country.alpha3Code} height="16px" width="24px"></Flag>{country.name.common}</Link></ListGroup.Item>
                    )
                })
            }
        </ListGroup>
    )
}

export default CountriesList
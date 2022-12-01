import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Table } from "react-bootstrap"
import Flag from "react-world-flags"
import { ListGroup } from "react-bootstrap"
const CountryDetails = ({ countries }) => {

    const [countryDetails, setCountryDetails] = useState([])
    const [borders, setBorders] = useState([])

    const { id } = useParams()

    useEffect(() => {
        fetch(`https://ih-countries-api.herokuapp.com/countries/${id}`)
            .then(response => response.json())
            .then(data => setCountryDetails(data))
    }, [id])

    useEffect(() => {
        const foundBorders = countries.filter(elm => countryDetails?.borders?.includes(elm.alpha3Code))
        setBorders(foundBorders)
    }, [countryDetails])

    return (
        <>
            < div className="col-6 d-flex flex-column mt-5 align-items-center" >
                <Flag code={countryDetails?.alpha3Code} height="128px" width="100px"></Flag>
                <h6 className="display-6">{countryDetails?.name?.official}</h6>
                <Table>
                    <tbody className="text-center">
                        <tr>
                            <td>
                                <h5>Capital</h5>
                            </td>
                            <td>
                                {countryDetails?.capital}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5>Area</h5>
                            </td>
                            <td>
                                {countryDetails?.area}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5>Borders</h5>
                            </td>
                            <td>
                                <ListGroup>
                                    {borders?.map(elm => <ListGroup.Item key={elm.alpha3Code}><Link to={`/${elm.alpha3Code}`}>{elm.name?.official}</Link></ListGroup.Item>)}
                                </ListGroup>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div >
        </>

    )

}

export default CountryDetails
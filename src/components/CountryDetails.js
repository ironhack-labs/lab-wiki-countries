import { Link, useParams } from "react-router-dom";

function CountryDetails (props) {

    const {id} = useParams();
    // console.log(id);
    // console.log(props.data);

    const details = props.data.find(element => {
        return element.alpha3Code === id
    })

    // console.log(details)
    // console.log(details.name.official)

    const tdStyle = {"width": "30%"}

    return (
        <>
        <h1>CountryDetails</h1>

        <div className="col-7">
            <h1>{details.name.official}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={tdStyle}>Capital</td>
                  <td>{details.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                  {details.area}
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                        {
                            details.borders.map((element) => {
                                return (
                                    <li>
                                        {/* <Link> */}
                                            {element}
                                        {/* </Link> */}
                                    </li>
                                )
                            })
                        }
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        
        

        </>
    )
}

export default CountryDetails;
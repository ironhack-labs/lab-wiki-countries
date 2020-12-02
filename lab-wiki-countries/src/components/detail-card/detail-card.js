import { Link } from 'react-router-dom'


export default ({ name, capital, area, borders, flag }) => {


    return (
        <div className="col-7">
            <h1>{flag} {name}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td styles="width: 30%;">Capital</td>
                        {capital.map((elm, idx) => <td key={idx}>{elm}</td>)}
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{area} km
                  <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {borders.map((elm, idx) => <li key={idx}><Link to={elm}>{elm}</Link></li>)}

                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}
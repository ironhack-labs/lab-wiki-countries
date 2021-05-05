
const CountryDetails = ({ name.common, capital, area, rating, deleteOneMovie }) => {
    return (
        <div class="col-7">
            <h1>{name.common}</h1>
            <table class="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style="width: 30%">Capital</td>
                        <td>{capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {area}
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                <li><a href="/:">{name}</a></li>
                                
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default CountryDetails;
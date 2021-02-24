import { Link } from 'react-router-dom'

const Countrie = ({ name, capital, area, borders}) => {



    return (
        <div class="col-7">
            <h1>{name.common}</h1>
            <table class="table"></table>
            <thead></thead>
            <tbody>
                <tr>
                    <td>Capital</td>
                    <td>{capital}</td>
                </tr>
                <tr>
                    <td>Area</td>
                    <td>
                        {area}km
                    <sup>2</sup>
                    </td>
                </tr>
                <td>Borders</td>
                <td>
                    <ul>
                    <li>
                 <Link to="/:cca3">{[borders]}</Link>
                 </li>
                    </ul>
                </td>
            </tbody>
        </div>


    
    )
}

export default Countrie
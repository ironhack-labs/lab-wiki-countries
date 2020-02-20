import React from 'react'

function Detail() {
    return (
        <div class="col-7">
        <h1>France</h1>
        <table class="table">
        <thead></thead>
        <tbody>
            <tr>
            <td id="capital">Capital</td>
            <td>Paris</td>
            </tr>
            <tr>
            <td>Area</td>
            <td>551695 km
                <sup>2</sup>
            </td>
            </tr>
            <tr>
            <td>Borders</td>
            <td>
                <ul>
                <li><a href="/countries/AND">Andorra</a></li>
                <li><a href="/countries/BEL">Belgium</a></li>
                <li><a href="/countries/DEU">Germany</a></li>
                <li><a href="/countries/ITA">Italy</a></li>
                <li><a href="/countries/LUX">Luxembourg</a></li>
                <li><a href="/countries/MCO">Monaco</a></li>
                <li><a href="/countries/ESP">Spain</a></li>
                <li><a href="/countries/CHE">Switzerland</a></li>
                </ul>
            </td>
            </tr>
        </tbody>
        </table>
    </div>

    )
}

export default Detail

import React from 'react'
import countriesJson from '../countries.json'




export default function CountryDetails(props) {
    
    console.log(props)
        

    const getProject = (id) => {
        const theCountry = oneCountry => {
            return oneCountry.id === id
        }
   
        return countriesJson.find(theCountry)
    }

    const { params } = props.match
   

    const foundCountry = getProject(params.id)



    return (
    
        <div className="col-7">
            <h1></h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                    <td >Capital</td>
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
                        {/* <li><a href="/AND">Andorra</a></li>
                        <li><a href="/BEL">Belgium</a></li>
                        <li><a href="/DEU">Germany</a></li>
                        <li><a href="/ITA">Italy</a></li>
                        <li><a href="/LUX">Luxembourg</a></li>
                        <li><a href="/MCO">Monaco</a></li>
                        <li><a href="/ESP">Spain</a></li>
                        <li><a href="/CHE">Switzerland</a></li> */}
                        </ul>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    )
}



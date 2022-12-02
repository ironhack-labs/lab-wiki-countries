import React from 'react'
import { Link, useParams } from "react-router-dom";
import countryDet from "./../countries.json"


function CountryDetails(props) {
    const { alpha3Code } = useParams()

    const foundCountry = countryDet.find((singleCountry) => {
        return singleCountry.alpha3Code === alpha3Code;
    });

    console.log(foundCountry)
    const bordersArray = []

    const matched = countryDet.filter((country) => {
        // return country.alpha3Code === border
        for (let value in bordersArray) {
            if (bordersArray[value] === country.alpha3Code) {
                return bordersArray[value]
            }
        }
    })
    const newArray = []


    countryDet.map((country) => {
        for (const border of bordersArray) {
            console.log(border)
            if (border === country.alpha3Code) {
                console.log("match")
                newArray.push(country)
            }
        }
    })


    console.log("lala", newArray)

    return (
        <>
            <div className="col-7">
                <h1>{foundCountry.name.common}</h1>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{ width: "30%" }}>Capital</td>
                            <td>{foundCountry.capital}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>
                                {foundCountry.area} km
                                <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    {/* {foundCountry.borders.map((border) =>  { 
                    {console.log(border)}
                    bordersArray.push(border)



                 const c = props.CountriesList.find((element) => element.alpha3Code === alpha3Code); 
                       return  <li><a href={border}>{matched}</a></li> 

                    })} */}
                                    <p>{foundCountry.borders.length === 0 ? null : foundCountry.borders.map(element => {
                                        console.log(element)
                                        const c = countryDet.find(country => country.alpha3Code === element);
                                        return <li><a href={element}>{c.name.common}</a></li>
                                    })}
                                    </p>



                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default CountryDetails


// const borderName = country.find((x) => {
//     return x.country === country
// })

// console.log(borderName)
import React from 'react';
// import { myProjects } from './Projects';
import { Link } from 'react-router-dom';
import { CountriesList } from './CountriesDet';
import { countryList as InitialCtryList } from './CountriesDet';

const countryDetails = (props) => {
    console.log(props)

    const getCountry = (id) => {
        const theCountry = oneCountry => {
            return oneCountry.cca3 === id;
        }
        return CountriesList.find(theCountry)
    };

    const { params } = props.match;
    const foundCountry = getCountry(params.id, 10);
    const getBorders = (ctry) => {
        const arrayBorder = ctry.borders
        const newarray = arrayBorder.map(everycca3 => {
            return getCountry(everycca3)
        }
        )
        return newarray

    }

    const bordersList = getBorders(foundCountry)

    return (
        <div className='countries-list-flex'>
            <div className="countries-list-to-keep">
                <InitialCtryList />
            </div>
            <div className='country-detail'>
                <h1>{foundCountry.name.common} </h1>
                <ul style={{ listStyle: 'none' }}>
                    <li> Capital : {foundCountry.capital} </li>
                    <li> Area : {foundCountry.area} Km²</li>
                    <li> Borders :
                        {
                            bordersList.map(ctry => {
                                return (
                                    <ol> {ctry.name.common}</ol>
                                )
                            })

                        }


                    </li>
                </ul>

                <Link to='/'>Back</Link>
            </div>
        </div>
    )
}

export default countryDetails;
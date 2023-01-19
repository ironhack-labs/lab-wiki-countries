// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// function CountriesList() {

//     const [countries, setCountries] = useState([])
//     useEffect(() => {
//         fetch(' https://ih-countries-api.herokuapp.com/countries')
//             .then(res => res.json())
//             .then(countriesData => setCountries(countriesData))

//     }, [])

//     return (
//         <div className="listbox">
//             <h2>Countries List</h2>
//             {countries.map((country) => {

//                 return (
//                     <div key={country.alpha3Code} className="country">
//                         <h5>{country.name.official}</h5>
//                         <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt='' />
//                         <br></br>
//                         <Link to={`/${country.alpha3Code}`}>Ver detalles</Link>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// }




// export default CountriesList;



// with pagenation

import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const CountriesList = () => {


    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch(' https://ih-countries-api.herokuapp.com/countries')
            .then(res => res.json())
            .then(countries => setCountries(countries))

    }, [])

    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 10
    const pageNumbers = []

    const lastIndex = currentPage * itemsPerPage
    const firstIndex = lastIndex - itemsPerPage
    const currentCountries = countries.slice(firstIndex, lastIndex)

    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1)
    }

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1)
    }

    for (let i = 1; i <= Math.ceil(countries.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <div className="listbox">
                <h2>Countries List</h2>
                {countries.length > 0 && (
                    <>

                        {currentCountries.map((country) => {

                            return (
                                <div key={country.alpha3Code} className="country">
                                    <h5>{country.name.official}</h5>
                                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt='' />
                                    <br></br>
                                    <Link to={`/${country.alpha3Code}`}>Ver detalles</Link>
                                </div>
                            );
                        })}
                    </>
                )}
            </div>
            <div>
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                    Previous
                </button>
                <button onClick={handleNextPage} disabled={lastIndex >= countries.length}>
                    Next
                </button>
            </div>
            <div>
                {pageNumbers.map(number => (
                    <button key={number} onClick={() => handlePageChange(number)} disabled={number === currentPage}>
                        {number}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default CountriesList


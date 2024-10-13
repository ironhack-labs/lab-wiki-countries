import Navbar from "../components/Navbar";
import { useState} from "react";
import {useContext} from "react"
import {DataContext} from "../context/Data.context"
import { Link } from "react-router-dom";


function HomePage() {
    const {allData, setAllData} = useContext(DataContext)
    const [limit] = useState(15)
    const [page, setPage] = useState(1)

   
    const startIndex = (page - 1) * limit
    const pageCountries = allData.slice(startIndex, startIndex + limit)
    const totalPages = Math.ceil(allData.length / limit)

    const nextPage = () => setPage((prevPage) => Math.min(prevPage + 1, totalPages));
    const prevPage = () => setPage((prevPage) => Math.max(prevPage - 1, 1));

    const disabled = true
    return (
        <>
            <Navbar />
            <div className="container" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
                <h1 style={{ fontSize: '24px' }}>WikiCountries: Your Guide to the World</h1>
                <div className="list-group">
                    {pageCountries.map((eachCountry, i) => (
                        <div key={i} className="list-group-item list-group-item-action">
                            <Link style={{textDecoration: 'none'}} to={`/${eachCountry._id}`}>
                            <div ><img src={`https://flagcdn.com/16x12/${eachCountry.alpha2Code.toLowerCase()}.png`} alt={eachCountry.name.common} /> {eachCountry.name.common}</div>
                            </Link>
                        </div>
                    ))}
                    <div>
                        <button onClick={prevPage} hidden={page === 1}> Before </button>
                        <span style={{ marginRight: '10px' }}>Page {page} of {totalPages}</span>
                <button onClick={nextPage} disabled={false}>
                    Next
                </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage;

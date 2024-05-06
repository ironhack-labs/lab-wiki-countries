import CountriesList from "../components/CountriesList";
import Navbar from "../components/Navbar";

function HomePage({ countries }) {
    return (
        <div className="homepage-container">
            <Navbar />
            <div className="countries-list" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
                <h1>WikiCountries: Your Guide to the World</h1>
                <CountriesList countries={countries} />
            </div>
        </div>
    )
}

export default HomePage;
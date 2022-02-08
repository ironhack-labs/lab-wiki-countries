import { useParams } from "react-router-dom";
import { CountryList, CountryDetails } from "../../components";

function Home(props){

    
    return(
        <div className="container">
        <CountryList/>

        </div>
    )
};

export default Home;
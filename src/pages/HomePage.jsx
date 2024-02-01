import { useEffect, useState } from "react";
import { getCountries } from "../services/countryService";
import ListItem from '../Item/ListItem';
import '../pages/Pages.css'
/* import { getAuthor, getMessage} from '../services/localService'; */




function HomePage() {
    const [countries, setCountries] = useState([])
    /*     const [author, setAuthor] = useState('')
        const [message, setMessage] = useState('')
     */

    useEffect(() => {
        getCountries()
            .then((countriesApi) => {
                setCountries(countriesApi)
            })
            .catch((err) => console.error(err))


        /*  Promise.all([getAuthor(), getMessage()])
         .then(res => {
           const [resAuthor, resMessage] = res;
     
           setAuthor(resAuthor.author)
           setMessage(resMessage.message)
         }) */
    }, [])


    return (
        <div className="container mt-4">
          <h1 className="mb-4">Wiki Countries 🌍</h1>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {countries.map((country) => (
              <div key={country.name.common} className="col">
                <div className="card">
                  <ListItem country={country} />
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }





export default HomePage;

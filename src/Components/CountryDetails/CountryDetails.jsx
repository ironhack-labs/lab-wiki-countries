import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import axios from "axios"

function CountryDetails({ Country }) {

    const { id } = useParams()

    // const [foundProject, setFoundProject] = useState({})




    // useEffect(() => {           // Simulación de API call actualizando el estado
    //     axios
    //         .get('https://ih-countries-api.herokuapp.com/countries/' + id)
    //         .then(({ data }) => {

    //             setFoundProject(data);


    //         })
    //         .catch(err => console.log(err))
    // }, [])

    // const foundCountry = foundProject.find((oneProject) => {   //  <== ADD
    //     return oneProject.alpha3Code === id;
    // });

    const foundProject = Country.find((oneProject) => {   //  <== ADD
        return oneProject.alpha3Code === id;
    });


    let flag = foundProject.alpha2Code.toLowerCase()
    return (
        <div className="bordes">
            {/* <div>{foundCountry.name.official}</div> */}
            <div>{foundProject.name.official}</div>



            <img src={` https://flagpedia.net/data/flags/icon/72x54/${flag}.png`} alt="" />



            <p>
                <Link className="enlace" to="/">Volver a la lista</Link>
            </p>

        </div>
    );
}

export default CountryDetails;
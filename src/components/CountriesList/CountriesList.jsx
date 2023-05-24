import './CountriesList.css'
import { Link } from "react-router-dom";

const CountriesList = ({ elements }) => {

    return (

        elements.map((eachCountrie, index) => {
            const code = `https://flagpedia.net/data/flags/icon/72x54/${eachCountrie.alpha2Code.toLowerCase()}.png`

            return (

                <Link to={`/${eachCountrie.alpha3Code}`} key={index}>
                    <article className='card p-2 mb-2'>

                        <img className='codeImg' src={code} alt="" />
                        <h5>{eachCountrie.alpha3Code}</h5>

                    </article >
                </Link>

            )

        })

    )

}

export default CountriesList


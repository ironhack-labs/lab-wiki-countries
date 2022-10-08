import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';


function CountryDetails({ countries }) {

    const [country, setcountry] = useState({});
    const { id } = useParams();
    console.log(id)

    useEffect(() => {
        console.log(countries)
        console.log(id)
        const find = countries.find((eachCountry) => eachCountry.alpha2Code === id);
        console.log(find)
        setcountry(find)
    }, [id]);

    return (<><h1>Hola</h1>
        <h1>ehhh{country?.name?.common}</h1></>)



}

export default CountryDetails;



//render capital area y border


// import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// const CountryDetails = ({ countries }) => {
//     // console.log('---------------->', countries)
//     const [eachCountry, setEachCountry] = useState({});
//     const { id } = useParams();
//     useEffect(() => {
//         const find = countries.find((countryDetail) => countryDetail.alpha3Code === id);
//         // console.log('------------------------->', countryDetail)
//         console.log('el find------------->', find)
//         setEachCountry(find);
//     }, [id]);
//     // console.log(eachCountry)
//     // console.log(eachCountry.name.country)
//     return (<>
//         <h1>{eachCountry?.name?.common}</h1>
//         <h1>Hola</h1>
//     </>

//     )
// }
// export default CountryDetails
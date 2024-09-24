import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function HomePage(){

	const url = 'https://ih-countries-api.herokuapp.com/countries'

	const [countries, setCountries] = useState(null)

	const getData = async ()=>{
		try {
			setCountries(null)
			let data = await fetch(url)
			data = await data.json()
			// console.log(data)
			setCountries(data)
		} catch (error) {
			console.log(error)
		}
		
	}
	useEffect(()=>{
		getData();
		return()=>{};
	}, [])


	if (countries === null){
		return(
			<h1>...Buscando paises</h1>
		)
	}

	return (

	<div className={"container"} style={{maxHeight:"90vh", overflow: "scroll"}}>
		<h1 style={{fontSize: "24px"}}>WikiCountries: Your Guide to the World</h1>
		{countries.map((country)=>{
			return(
			<div className={"list-group"} key={country._id}>
				<Link to={`/${country.alpha3Code}`}className={"list-group-item list-group-item-action"}>
				<img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" />
				<p>{country.name.common}</p>
				</Link>
			</div>
			)
			})
		}
	</div>
	)
}

export default HomePage;

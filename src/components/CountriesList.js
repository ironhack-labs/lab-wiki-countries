import React,{useState} from 'react'
import countries from "../countries.json"

function CountriesList() {
	const [country, setCountry] = useState("")

	function viewDetail(index) {
		let count = countries[index]
		setCountry(count)
	}

	const [countryFromDetail, setCountryFromDetail] = useState("")

	function viewDetailFromUl(el){
		countries.filter((elem)=>{
			if(elem.cca3===el){
				console.log(elem.name.common)
				setCountryFromDetail(elem)
			}else{
				return null;
			}
		})
	}

	let style = {display: "none"}

	console.log(countryFromDetail)

	return (
		<div className = "container">
					<div class="main">
						{countries.map((ele, index, arr)=>{
							return(
									<div class="card" key = {index}>
											<div class="card-body">
												<h5 onClick = {()=>{viewDetail(index)}} class="card-title">{ele.flag}{ele.name.common}</h5>
											</div>
									</div>
							)
						})}
					</div>
					<div className = "detail detailMainView">
					{country !== "" ? (
								<div>
										<h1>{country.name.common}{country.flag}</h1>
										<hr></hr>
										<p>Capital : {country.capital}</p>
										<hr></hr>
										<p>Area : {country.area} km²</p>
										<hr></hr>
									{country.borders.length !== 0 ? 
									(
										<div>
										<p>Borders : 
										<ul>
											{country.borders.map((ele,index,arr)=>{
											return (
												<li>
													<p onClick ={()=>{viewDetailFromUl(ele)}} className = "pais">{ele}</p>
												</li>
											)
										})}
										</ul>
										</p>
										</div>
										)
										:
										(null)
										}
								</div>
								):
								(
									null
								)
								}
								{countryFromDetail !== "" ? (
									<div>
									<h1>{countryFromDetail.name.common}{countryFromDetail.flag}</h1>
									<hr></hr>
									<p>Capital : {countryFromDetail.capital}</p>
									<hr></hr>
									<p>Area : {countryFromDetail.area} km²</p>
									<hr></hr>
									{countryFromDetail.borders.length !== 0 ? (
										<div>
											<p>Borders : 
											<ul>
												{countryFromDetail.borders.map((ele,index,arr)=>{
												return (
													<li>
														<p onClick ={()=>{viewDetailFromUl(ele)}} className = "pais">{ele}</p>
													</li>
												)
											})}
											</ul>
											</p>
										</div>
									):
									(null)
									}
									</div>
								):
								(
									null
								)}
				</div>
		</div>
	)
}

export default CountriesList

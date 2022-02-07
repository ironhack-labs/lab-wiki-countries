
export const getCountries = async() => {
    const url = `https://ih-countries-api.herokuapp.com/countries`
    const resp = await fetch(url);
    const  countries  = await resp.json();
    return countries
};


export const getCountry = async(code) => {
    const url = `https://ih-countries-api.herokuapp.com/countries/${code}`
    const resp = await fetch(url);
    const  country  = await resp.json();
    return country
};
import axios from 'axios';

class api{
    constructor(){
        this.api = axios.create({baseURL:'https://ih-countries-api.herokuapp.com/countries'})
    }


    getAllCountries = async () => {
    try {
        const { data } = await this.api.get('/')
        return data
    }
    catch (error) {
        alert ('Houve um erro')
    }
    }
}

export default new api()
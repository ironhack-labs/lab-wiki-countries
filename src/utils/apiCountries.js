import axios from 'axios';

class apiCountries {

    constructor () {
        this.api = axios.create(
            {
              baseURL: 'https://ih-countries-api.herokuapp.com/countries'  
            }
        )
    }

    getAllCountries = async () => {
        try {
            const { data } = await this.api.get('/');
            return data;
        } catch (error) {
            throw new Error('Cannot Fetch Data');
        }
    }
}

export default new apiCountries();
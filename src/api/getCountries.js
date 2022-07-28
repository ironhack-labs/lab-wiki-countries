import api from './axios.config'

export const getCountries = () => api.get('/countries')

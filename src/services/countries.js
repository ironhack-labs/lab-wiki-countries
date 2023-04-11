import http from './base-api'

const list = () => http.get('/countries')
  .then((response) => {
    return response.data
  })

const country = (alpha3Code) => http.get(`/countries/${alpha3Code}`)
  .then((response) => {
    return response.data
  })

export default {
  list,
  country
}
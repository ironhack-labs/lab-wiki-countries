import http from './base-api'

const list = () => http.get('/countries')
  .then((res) => res.data)

const detail = (id) => http.get(`/countries/${id}`)
  .then((res) => res.data)


const service = {
  list,
  detail
}

export default service
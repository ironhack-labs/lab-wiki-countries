import http from './base-api'

const list = () => http.get('/countries')
  .then((res) => res.data)

const service = {
  list
}

export default service
import http from './base-api'

const list = () => http.get('/countries').then((response) => {
  return response.data
})

export default {
  list
}
import http from './base-api'

const list = () => http.get('/countries').then((response) => {
  console.log('response > ', response)
  return response.data
})

export default {
  list
}
import http from "./base-api";

const list = () => http.get('/countries')
  .then(res => res.data)

export default {
  list
}
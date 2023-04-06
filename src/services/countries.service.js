import http from "./base-api";

const list = () => http.get('/countries')
  .then(res => res.data.sort((a, b) => a.name.common.localeCompare(b.name.common)));

const detail = (id) => http.get(`/countries/${id}`)
  .then(res => res.data);

export default {
  list,
  detail
}



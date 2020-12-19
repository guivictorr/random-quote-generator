import axios from 'axios'

const api = axios.create({
  baseURL: 'https://quote-garden.herokuapp.com/api/v3/'
})

export default api

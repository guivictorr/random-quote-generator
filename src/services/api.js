import axios from 'axios'

const api = axios.create({
  baseURL: 'https://quote-garden.herokuapp.com/api/v2/'
})

export default api
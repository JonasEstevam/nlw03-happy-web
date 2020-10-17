import axios from 'axios';

const api = axios.create({
  baseURL: 'https://nlw03-happy.herokuapp.com'
})

export default api;
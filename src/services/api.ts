import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.PUBLIC_URL}/products.json`
})

export default api;

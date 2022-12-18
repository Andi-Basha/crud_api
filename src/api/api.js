//middelware intersepter
import axios from 'axios';

//ma mire me kriju instance te axios
const api = axios.create({
  baseURL: 'https://dummyjson.com/',
});

export default api;

import axios from 'axios';


const api = axios.create({
  baseURL: 'https://spotted-wednesday.herokuapp.com/'
}); 

export default api; 
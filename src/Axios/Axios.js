import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://betainfotech.pythonanywhere.com/',
  });
export default instance;
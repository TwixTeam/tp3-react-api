import axios from 'axios';
import {
  BASE_URL,
  REQUEST_TIMEOUT
} from './constants';

axios.defaults.baseURL = BASE_URL;
axios.defaults.timeout = REQUEST_TIMEOUT;
axios.defaults.withCredentials= true;
axios.defaults.crossDomain = true;


const TOKEN = localStorage.getItem('token');
if (TOKEN) axios.defaults.headers.common['Authorization'] = 'Bearer ' + TOKEN;

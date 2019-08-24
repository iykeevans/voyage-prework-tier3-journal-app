import axios from 'axios'
import { getToken } from './token';

const API_BASE_URL = 'http://localhost:5000/api/v1';

export default axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getToken()}`,
  },
});

console.log('===========>client', getToken());

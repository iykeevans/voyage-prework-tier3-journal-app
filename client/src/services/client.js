import axios from 'axios';
import { getToken } from './token';

const prodUrl = 'https://chingu-journal-app.herokuapp.com/api/v1';
const API_BASE_URL = 'http://localhost:5000/api/v1';

export default axios.create({
  baseURL: prodUrl,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getToken()}`
  }
});

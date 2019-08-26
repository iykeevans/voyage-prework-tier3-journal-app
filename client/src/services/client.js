import axios from 'axios'
import { getToken } from './token';

const API_BASE_URL = 'https://chingu-journal-app.herokuapp.com/api/v1';

export default axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getToken()}`,
  },
});

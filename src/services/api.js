// Base URL: https://api.themoviedb.org/3/
// API Key: fecd7450ab2f3fb03c1527ccc730a3aa
// Example : https://api.themoviedb.org/3/movie/550?api_key=fecd7450ab2f3fb03c1527ccc730a3aa

import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
})

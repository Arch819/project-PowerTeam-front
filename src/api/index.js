import axios from 'axios';
import * as statisticApi from './statisticApi';
import * as diaryApi from './diaryApi';
import * as productsApi from './productsApi';
import * as exercisesApi from './exercisesApi';
import * as authApi from './authApi';

axios.defaults.baseURL = 'https://powerpulse-backend-heie.onrender.com';
const api = {
  statisticApi,
  diaryApi,
  productsApi,
  exercisesApi,
  authApi,
};
export default api;

import axios from 'axios';
import * as statisticApi from './statisticApi';
// import * as diaryApi from './diaryApi';

axios.defaults.baseURL = 'http://powerpulse-backend-heie.onrender.com';
// axios.defaults.baseURL = 'http://localhost:8000';
const api = { 
  statisticApi,
  // diaryApi
};
export default api;

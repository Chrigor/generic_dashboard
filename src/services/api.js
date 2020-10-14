import axios from 'axios';

import Config from '../config';

const API = axios.create({
  baseURL: Config.FLUIG_SERVER
});


export default API;
import grid from './config/grid';
import dashboard from './config/dashboard';
import filtersInput from './config/filterInputs';
import { dataset, datasetUpdate } from './config/datasets';
import { FLUIG_SERVER, AUTH_CONSUMER_KEY_POST, AUTH_TOKEN_POST, AUTH_CONSUMER_SECRET_KEY_POST, AUTH_TOKEN_SECRET_POST } from './config/auth';
import {modeDevelopment } from './config/mode';
import { title, titleSideBar } from './config/sideBar';

export default {
  title,
  titleSideBar,
  modeDevelopment,
  FLUIG_SERVER,
  AUTH_CONSUMER_KEY_POST,
  AUTH_TOKEN_POST,
  AUTH_CONSUMER_SECRET_KEY_POST,
  AUTH_TOKEN_SECRET_POST,
  dataset,
  datasetUpdate,
  grid,
  dashboard,
  filtersInput,
};

import api from '../services/api';
import auth from '../services/auth';

import Config from '../config';

const getDataset = async (datasetName = '', constraints = []) => {

  const { modeDevelopment, AUTH_CONSUMER_KEY_POST, AUTH_CONSUMER_SECRET_KEY_POST, AUTH_TOKEN_POST, AUTH_TOKEN_SECRET_POST } = Config;

  try {
    const END_POINT = 'api/public/ecm/dataset/datasets';

    const headers = auth(
      END_POINT,
      AUTH_CONSUMER_KEY_POST,
      AUTH_CONSUMER_SECRET_KEY_POST,
      AUTH_TOKEN_POST,
      AUTH_TOKEN_SECRET_POST,
      'POST',
    );

    const body = {
      name: datasetName,
      fields: [],
      constraints,
    };

    let { data } = await api.post(END_POINT, body, modeDevelopment ? headers : {});
    return data.content.values;

  } catch (error) {
    console.log(error);
    throw new Error('Erro ao Dataset');
  }
};

export default getDataset;

import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getStaff = (id) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/staff.json?orderBy="event_id"&equalTo="${id}"`)
    .then((response) => {
      resolve(Object.values(response.data));
    }).catch((error) => reject(error));
});

export default getStaff;

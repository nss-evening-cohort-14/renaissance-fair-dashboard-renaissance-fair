import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getStaff = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/staff.json`)
    .then((response) => {
      console.warn(response.data);
    }).catch((error) => reject(error));
});

export default getStaff;

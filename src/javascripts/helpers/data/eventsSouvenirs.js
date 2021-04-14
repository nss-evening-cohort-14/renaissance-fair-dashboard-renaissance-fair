import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getEventsSouvenirs = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/events_souvenirs.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

export default getEventsSouvenirs;

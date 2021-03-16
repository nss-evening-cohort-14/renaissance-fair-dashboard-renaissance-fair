import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;
// GET SOUVENIRS
const getSouvenirs = (id) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/souvenirs.json?orderBy="event_id"&equalTo="${id}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

export default getSouvenirs;

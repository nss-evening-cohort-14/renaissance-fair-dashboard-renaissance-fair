import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;
// GET SOUVENIRS
const getSouvenirs = (id) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/souvenirs.json?orderBy="event_id"&equalTo="${id}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});
// CREATE NEW SOUVENIR
const createSouvenirs = (souvenirObject, id) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/souvenirs.json`, souvenirObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/souvenirs/${response.data.name}.json`, body)
        .then(() => getSouvenirs(id).then((souvenirResponse) => resolve(souvenirResponse)))
        .catch((error) => reject(error));
    });
});

export { getSouvenirs, createSouvenirs };

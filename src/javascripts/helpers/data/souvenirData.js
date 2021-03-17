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
// CREATE NEW SOUVENIR
const createWares = (souvenirObject, id) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/souvenirs.json`, souvenirObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/souvenirs/${response.data.name}.json`, body)
        .then(() => {
          getSouvenirs(id).then((souvenirArray) => resolve(souvenirArray));
        });
      console.warn(response.data.name);
    }).catch((error) => reject(error));
});

export { getSouvenirs, createWares };

import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;
// GET ALL SOUVENIRS
const getAllSouvenirs = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/souvenirs.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});
// GET SOUVENIRS
const getSouvenirs = (id) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/souvenirs.json?orderBy="event_id"&equalTo="${id}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});
// CREATE NEW SOUVENIR
const createSouvenirs = (souvenirObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/souvenirs.json`, souvenirObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/souvenirs/${response.data.name}.json`, body)
        .then(() => getAllSouvenirs().then((souvenirResponse) => resolve(souvenirResponse)))
        .catch((error) => reject(error));
    });
});
// DELETE SOUVENIR
const deleteSouvenirs = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/souvenirs/${firebaseKey}.json`)
    .then(() => getAllSouvenirs().then((souvenirResponse) => resolve(souvenirResponse)))
    .catch((error) => reject(error));
});
// RETRIEVE A SINGLE SOUVENIR IN ORDER TO EDIT/UPDATE
const getSingleSouvenir = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/souvenirs/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// UPDATE A SOUVENIR'S INFO IN REAL TIME
const updateSouvenir = (firebaseKey, souvenirObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/souvenirs/${firebaseKey}.json`, souvenirObject)
    .then(() => {
      getAllSouvenirs().then((souvenirResponse) => resolve(souvenirResponse))
        .catch((error) => reject(error));
    });
});

export {
  getAllSouvenirs,
  getSouvenirs,
  createSouvenirs,
  deleteSouvenirs,
  getSingleSouvenir,
  updateSouvenir
};

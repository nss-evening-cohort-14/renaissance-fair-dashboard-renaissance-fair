import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getAllShows = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/shows.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getShows = (id) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/shows.json?orderBy="event_id"&equalTo="${id}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const createShow = (showObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/shows.json`, showObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/shows/${response.data.name}.json`, body)
        .then(() => {
          getAllShows().then((showsArray) => resolve(showsArray));
        });
    }).catch((error) => reject(error));
});

const deleteShow = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/shows/${firebaseKey}.json`)
    .then(() => getAllShows().then((showsArray) => resolve(showsArray)))
    .catch((error) => reject(error));
});

const updateShow = (firebaseKey, showObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/shows/${firebaseKey}.json`, showObject)
    .then(() => getAllShows()).then((showsArray) => resolve(showsArray))
    .catch((error) => reject(error));
});

const getSingleShow = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/shows/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  getAllShows,
  getShows,
  createShow,
  deleteShow,
  updateShow,
  getSingleShow
};

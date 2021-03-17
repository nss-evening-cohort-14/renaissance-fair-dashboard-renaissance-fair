import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getShows = (id) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/shows.json?orderBy="event_id"&equalTo="${id}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const createShow = (showObject, id) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/shows.json`, showObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/shows/${response.data.name}.json`, body)
        .then(() => {
          getShows(id).then((showsArray) => resolve(showsArray));
        });
    }).catch((error) => reject(error));
});

const deleteShow = (firebaseKey, id) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/shows/${firebaseKey}.json`)
    .then(() => getShows(id).then((showsArray) => resolve(showsArray)))
    .catch((error) => reject(error));
});

export {
  getShows,
  createShow,
  deleteShow
};

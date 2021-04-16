import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getEventsShowsTables = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/events_shows.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const createEventShowsRelationship = (obj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/events_shows.json`, obj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/events_shows/${response.data.name}.json`, body);
    }).then(() => getEventsShowsTables().then((esResp) => resolve(esResp)))
    .catch((error) => reject(error));
});

export { getEventsShowsTables, createEventShowsRelationship };

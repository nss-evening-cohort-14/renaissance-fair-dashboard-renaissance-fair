import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getEventsSouvenirTables = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/events_souvenirs.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const createEventSouvenirsRelationship = (obj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/events_souvenirs.json`, obj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/events_souvenirs/${response.data.name}.json`, body);
    }).then(() => getEventsSouvenirTables().then((esResp) => resolve(esResp)))
    .catch((error) => reject(error));
});

export { getEventsSouvenirTables, createEventSouvenirsRelationship };

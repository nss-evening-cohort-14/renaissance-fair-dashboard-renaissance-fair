import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getEventsFoodTables = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/events_food.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const createEventFoodRelationship = (obj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/events_food.json`, obj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/events_food/${response.data.name}.json`, body);
    }).then(() => getEventsFoodTables().then((esResp) => resolve(esResp)))
    .catch((error) => reject(error));
});

export { getEventsFoodTables, createEventFoodRelationship };

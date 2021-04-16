import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getEventsStaffTables = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/events_staff.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const createEventStaffRelationship = (obj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/events_staff.json`, obj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/events_staff/${response.data.name}.json`, body);
    }).then(() => getEventsStaffTables().then((esResp) => resolve(esResp)))
    .catch((error) => reject(error));
});

export { getEventsStaffTables, createEventStaffRelationship };

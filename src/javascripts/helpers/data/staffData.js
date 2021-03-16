import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getStaff = (id) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/staff.json?orderBy="event_id"&equalTo="${id}"`)
    .then((response) => {
      resolve(Object.values(response.data));
    }).catch((error) => reject(error));
});

const createStaff = (staffObject, id) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/staff.json`, staffObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/staff/${response.data.name}.json`, body)
        .then(() => {
          getStaff(id).then((staffArray) => resolve(staffArray));
        });
    }).catch((error) => reject(error));
});

export { getStaff, createStaff };

import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getAllStaff = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/staff.json`)
    .then((response) => {
      resolve(Object.values(response.data));
    }).catch((error) => reject(error));
});

const getStaff = (id) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/staff.json?orderBy="event_id"&equalTo="${id}"`)
    .then((response) => {
      resolve(Object.values(response.data));
    }).catch((error) => reject(error));
});

const createNewStaff = (staffObject, id) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/staff.json`, staffObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/staff/${response.data.name}.json`, body)
        .then(() => getStaff(id).then((staffArray) => resolve(staffArray)));
    }).catch((error) => reject(error));
});

const deleteStaff = (firebaseKey, id) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/staff/${firebaseKey}.json/`)
    .then(() => getStaff(id).then((staffArray) => resolve(staffArray)))
    .catch((error) => reject(error));
});

const getSingleStaff = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/staff/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const updateStaff = (firebaseKey, staffObject, id) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/staff/${firebaseKey}.json`, staffObject)
    .then(() => getStaff(id)).then((staffArray) => resolve(staffArray))
    .catch((error) => reject(error));
});

export {
  createNewStaff,
  getAllStaff,
  getStaff,
  deleteStaff,
  getSingleStaff,
  updateStaff
};

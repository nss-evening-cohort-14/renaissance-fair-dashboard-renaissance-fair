import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getAllEvents = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/dashboard.json`)
    .then((response) => resolve(Object.values(response.data)[0]))
    .catch((error) => reject(error));

const getEvents = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/dashboard.json`)
    .then((response) => resolve(Object.values(response.data)[0]))
    .catch((error) => reject(error));
});

export default getEvents;

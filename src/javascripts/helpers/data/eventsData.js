import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getAllEvents = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/events.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getEvents = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/events.json`)
    .then((response) => resolve(Object.values(response.data)[0]))
    .catch((error) => reject(error));
});

const deleteEvents = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/events/${firebaseKey}.json`)
    .then(() => getAllEvents().then((eventArray) => resolve(eventArray)))
    .catch((error) => reject(error));
});

export { getAllEvents, getEvents, deleteEvents };

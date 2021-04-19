import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getAllEvents = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/events.json`)
    .then((response) => {
      if (response.data) {
        const eventsArray = Object.values(response.data);
        resolve(eventsArray);
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const getEvents = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/events.json`)
    .then((response) => resolve(Object.values(response.data)[0]))
    .catch((error) => reject(error));
});

const getSingleEvent = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/events/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const deleteEvent = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/events/${firebaseKey}.json`)
    .then(() => getAllEvents().then((eventArray) => resolve(eventArray)))
    .catch((error) => reject(error));
});

const createEvent = (eventObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/events.json`, eventObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/events/${response.data.name}.json`, body)
        .then(() => getSingleEvent(response.data.name).then((eventResponse) => resolve(eventResponse)))
        .catch((error) => reject(error));
    });
});

const updateEvent = (eventId, eventObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/events/${eventId}.json`, eventObj)
    .then((response) => {
      if (response.data.name) {
        getSingleEvent(response.data.name)
          .then((updatedObj) => resolve(updatedObj));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

export {
  getAllEvents, getEvents, getSingleEvent,
  deleteEvent, createEvent, updateEvent
};

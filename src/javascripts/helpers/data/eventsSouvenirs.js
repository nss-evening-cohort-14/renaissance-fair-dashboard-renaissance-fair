import axios from 'axios';
import firebaseConfig from '../apiKeys';

import { getEventSouvenirs } from './eventsRelationships';

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

const deleteEventSouvenirRelationship = (tableId) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/events_souvenirs/${tableId}.json`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const deleteEventSouvenirs = (eventId) => {
  getEventSouvenirs(eventId).then((souvenirsArr) => {
    souvenirsArr.forEach((souvenir) => deleteEventSouvenirRelationship(souvenir.firebaseKey));
  });
};

export {
  getEventsSouvenirTables, createEventSouvenirsRelationship,
  deleteEventSouvenirs
};

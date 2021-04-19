import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getEventSouvenirs = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/events_souvenirs.json?orderBy="event_firebaseKey"&equalTo="${firebaseKey}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const getEventShows = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/events_shows.json?orderBy="event_firebaseKey"&equalTo="${firebaseKey}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const getEventStaff = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/events_staff.json?orderBy="event_firebaseKey"&equalTo="${firebaseKey}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const getEventFood = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/events_food.json?orderBy="event_firebaseKey"&equalTo="${firebaseKey}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const getAllEventItems = (eventFirebaseKey) => new Promise((resolve, reject) => {
  const souvenirsArray = getEventSouvenirs(eventFirebaseKey);
  const showsArray = getEventShows(eventFirebaseKey);
  const staffArray = getEventStaff(eventFirebaseKey);
  const foodArray = getEventFood(eventFirebaseKey);

  Promise.all([souvenirsArray, showsArray, staffArray, foodArray])
    .then(([souvenirResp, showResp, staffResp, foodResp]) => resolve(
      {
        souvenirs: souvenirResp, shows: showResp, staff: staffResp, food: foodResp
      }
    )).catch((error) => reject(error));
});

export {
  getEventSouvenirs, getEventFood, getEventStaff, getEventShows, getAllEventItems
};

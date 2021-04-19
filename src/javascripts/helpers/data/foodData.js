import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getAllFood = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/food.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getFood = (id) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/food.json?orderBy="event_id"&equalTo="${id}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});
// CREATE FOOD
const createFood = (foodObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/food.json`, foodObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/food/${response.data.name}.json`, body)
        .then(() => getAllFood().then((foodResponse) => resolve(foodResponse)))
        .catch((error) => reject(error));
    });
});

const deleteFood = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/food/${firebaseKey}.json`)
    .then(() => getAllFood().then((array) => resolve(array)))
    .catch((error) => reject(error));
});

const getSingleFood = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/food/${firebaseKey}.json`)
    .then((foodObject) => resolve(foodObject.data))
    .catch((error) => reject(error));
});

const updateFood = (firebaseKey, foodObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/food/${firebaseKey}.json`, foodObject)
    .then(() => getAllFood().then((response) => resolve(response)))
    .catch((error) => reject(error));
});

export {
  createFood,
  getAllFood,
  getFood,
  deleteFood,
  getSingleFood,
  updateFood
};

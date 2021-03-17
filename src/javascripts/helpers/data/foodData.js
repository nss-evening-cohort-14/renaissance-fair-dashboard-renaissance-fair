import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getFood = (id) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/food.json?orderBy="event_id"&equalTo="${id}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});
// CREATE FOOD
const createFood = (foodObject, id) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/food.json`, foodObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/food/${response.data.name}.json`, body)
        .then(() => getFood(id).then((foodResponse) => resolve(foodResponse)))
        .catch((error) => reject(error));
    });
});
const deleteFood = (firebaseKey, id) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/food/${firebaseKey}.json`)
    .then(() => getFood(id).then((array) => resolve(array)))
    .catch((error) => reject(error));
});
const getSingleFood = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/food/${firebaseKey}.json`)
    .then((foodObject) => resolve(foodObject))
    .catch((error) => reject(error));
});

export {
  createFood,
  getFood,
  deleteFood,
  getSingleFood
};

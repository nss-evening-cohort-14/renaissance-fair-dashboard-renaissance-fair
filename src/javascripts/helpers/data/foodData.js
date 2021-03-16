import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getFood = (id) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/food.json?orderBy="event_id"&equalTo="${id}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export default getFood;

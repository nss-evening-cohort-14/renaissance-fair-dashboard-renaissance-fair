import printShows from '../components/printShows';
import { buildSouvenirs } from '../components/buildSouvenirs';
import getSouvenirs from './data/souvenirData';
import showFood from '../components/showFood';
import getFood from './data/foodData';
import getShows from './data/showsData';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    console.warn(e.target.id);
    if (e.target.id.includes('souvenir-view')) {
      getSouvenirs('-MUuao2lynNljpuXaHnJ').then((souvenirArray) => buildSouvenirs(souvenirArray));
    }
    if (e.target.id.includes('food-view')) {
      getFood('-MUuao2lynNljpuXaHnJ').then((foodArray) => showFood(foodArray));
    }
    if (e.target.id.includes('shows-view')) {
      getShows().then((showsArray) => printShows(showsArray));
    }
  });
};

export default domEvents;

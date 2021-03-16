import printShows from '../components/printShows';
import { buildSouvenirs } from '../components/buildSouvenirs';
import getSouvenirs from '../helpers/data/souvenirData';
import showFood from '../components/showFood';
import getFood from '../helpers/data/foodData';
import getStaff from '../helpers/data/staffData';
import { showStaff } from '../components/showStaff';
import getShows from '../helpers/data/showsData';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    console.warn(e.target.id);
    if (e.target.id.includes('souvenir-view')) {
      getSouvenirs('-MUuao2lynNljpuXaHnJ').then((souvenirArray) => buildSouvenirs(souvenirArray));
    }
    if (e.target.id.includes('food-view')) {
      getFood('-MUuao2lynNljpuXaHnJ').then((foodArray) => showFood(foodArray));
    }
    if (e.target.id.includes('staff-view')) {
      getStaff('-MUuao2lynNljpuXaHnJ').then((staffArray) => showStaff(staffArray));
    }
    if (e.target.id.includes('shows-view')) {
      getShows().then((showsArray) => printShows(showsArray));
    }
  });
};

export default domEvents;

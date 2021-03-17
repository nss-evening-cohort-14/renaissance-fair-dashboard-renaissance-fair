import printShows from '../components/printShows';
import { buildSouvenirs } from '../components/buildSouvenirs';
import { createWares, getSouvenirs } from '../helpers/data/souvenirData';
import showFood from '../components/showFood';
import getFood from '../helpers/data/foodData';
import getStaff from '../helpers/data/staffData';
import { showStaff } from '../components/showStaff';
import getShows from '../helpers/data/showsData';
import newWaresForm from '../components/forms/newWaresForm';

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
    if (e.target.id.includes('add-souvenir-btn')) {
      newWaresForm();
    }
    if (e.target.id.includes('submit-wares')) {
      e.preventDefault();
      const waresObject = {
        title: document.querySelector('#title').value,
        image: document.querySelector('#image').value,
        price: document.querySelector('#price').value,
        description: document.querySelector('#description').value,
      };
      createWares(waresObject).then((souvenirArray) => getSouvenirs(souvenirArray));
    }
  });
};

export default domEvents;

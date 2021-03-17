import printShows from '../components/printShows';
import { buildSouvenirs } from '../components/buildSouvenirs';
import getSouvenirs from './data/souvenirData';
import showFood from '../components/showFood';
import getFood from './data/foodData';
import getStaff from './data/staffData';
import { showStaff } from '../components/showStaff';
import getShows from './data/showsData';
import createStaff from '../components/forms/createStaff';

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
      getShows('-MUuao2lynNljpuXaHnJ').then((showsArray) => printShows(showsArray));
    }

    if (e.target.id.includes('add-newStaff-btn')) {
      createStaff();
    }

    if (e.target.id.includes('submitNewStaff')) {
      e.preventDefault();
      const staffObject = {
        first_name: document.querySelector('#staffFirstName').value,
        last_name: document.querySelector('#staffLastName').value,
        staff_image: document.querySelector('#staffImage').value,
        event_id: '-MUuao2lynNljpuXaHnJ',
        role: document.querySelector('#staffRole').value
      };
      createStaff(staffObject).then((staffArray) => showStaff(staffArray));
    }
  });
};

export default domEvents;

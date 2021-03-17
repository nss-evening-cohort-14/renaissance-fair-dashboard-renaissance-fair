import printShows from '../components/printShows';
import { buildSouvenirs } from '../components/buildSouvenirs';
import getSouvenirs from './data/souvenirData';
import showFood from '../components/showFood';
import { getFood } from './data/foodData';
import { createNewStaff, getStaff } from './data/staffData';
import { showStaff } from '../components/showStaff';
import getShows from './data/showsData';
import createStaff from '../components/forms/createStaff';
import createFoodForm from '../components/forms/createFoodForm';

const domEvents = (id) => {
  console.warn(id);
  document.querySelector('body').addEventListener('click', (e) => {
    console.warn(e.target.id);
    if (e.target.id.includes('souvenir-view')) {
      getSouvenirs(id).then((souvenirArray) => buildSouvenirs(souvenirArray));
    }
    if (e.target.id.includes('food-view')) {
      getFood(id).then((foodArray) => showFood(foodArray));
    }
    if (e.target.id.includes('staff-view')) {
      getStaff(id).then((staffArray) => showStaff(staffArray));
    }
    if (e.target.id.includes('shows-view')) {
      getShows(id).then((showsArray) => printShows(showsArray));
    }
    if (e.target.id.includes('create-food')) {
      createFoodForm();
    }
    if (e.target.id.includes('submit-food')) {
      e.preventDefault();
      console.warn(e.target.id);
      e.preventDefault();

      const foodObject = {
        title: document.querySelector('#foodName').value,
        content: document.querySelector('#foodDescription').value,
        image: document.querySelector('#imageUrl').value,
        article: document.querySelector('#article').value,
      };
      console.warn(foodObject);
    }

    if (e.target.id.includes('add-newStaff-btn')) {
      createStaff();
    }

    if (e.target.id.includes('submitNewStaff')) {
      e.preventDefault();
      const staffObject = {
        first_name: document.querySelector('#staffFirstName').value,
        staff_image: document.querySelector('#staffImage').value,
        role: document.querySelector('#staffRole').value,
        event_id: id
      };
      createNewStaff(staffObject, id).then((staffArray) => showStaff(staffArray));
    }
  });
};

export default domEvents;

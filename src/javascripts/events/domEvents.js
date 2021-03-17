import printShows from '../components/printShows';
import { buildSouvenirs } from '../components/buildSouvenirs';
import { createSouvenirs, getSouvenirs } from '../helpers/data/souvenirData';
import showFood from '../components/showFood';
import getFood from '../helpers/data/foodData';
import getStaff from '../helpers/data/staffData';
import { showStaff } from '../components/showStaff';
import getShows from '../helpers/data/showsData';
import newSouvenirsForm from '../components/forms/newWaresForm';

const domEvents = (id) => {
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
    if (e.target.id.includes('add-souvenir-btn')) {
      newSouvenirsForm();
    }
    if (e.target.id.includes('submit-souvenirs')) {
      e.preventDefault();
      const souvenirsObject = {
        souvenir_image: document.querySelector('#image').value,
        name: document.querySelector('#title').value,
        souvenir_price: document.querySelector('#price').value,
        souvenir_description: document.querySelector('#description').value,
        event_id: id
      };
      createSouvenirs(souvenirsObject, id).then((response) => buildSouvenirs(response));
    }
  });
};

export default domEvents;

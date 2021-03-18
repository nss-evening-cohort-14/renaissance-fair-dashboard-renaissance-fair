import printShows from '../components/printShows';
import { showSouvenirs } from '../components/showSouvenirs';
import {
  getSouvenirs, createSouvenirs, deleteSouvenirs, getSingleSouvenir, updateSouvenir
} from './data/souvenirData';
import showFood from '../components/showFood';
import {
  createNewStaff,
  getStaff, deleteStaff,
  getSingleStaff,
  updateStaff,
} from './data/staffData';
import {
  createFood,
  deleteFood,
  getFood,
  getSingleFood,
  updateFood
} from './data/foodData';
import { showStaff } from '../components/showStaff';
import createStaff from '../components/forms/createStaff';
import { createShow, deleteShow, getShows } from './data/showsData';
import createFoodForm from '../components/forms/createFoodForm';
import createShowForm from '../components/forms/createShowForm';
import newSouvenirsForm from '../components/forms/newWaresForm';
import headerTitle from '../components/headerTitle';
import updateStaffForm from '../components/forms/updateStaffForm';
import editSouvenirsForm from '../components/forms/editSouvenirsForm';
import editFoodForm from '../components/forms/editFoodForm';
import editFormModal from '../components/forms/editFormModal';

const domEvents = (id) => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('souvenir-view')) {
      headerTitle('Souvenirs');
      getSouvenirs(id).then((souvenirArray) => showSouvenirs(souvenirArray));
    }
    if (e.target.id.includes('food-view')) {
      getFood(id).then((foodArray) => showFood(foodArray));
    }
    if (e.target.id.includes('staff-view')) {
      headerTitle('See Our Staff');
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
      const foodObject = {
        event_id: id,
        name: document.querySelector('#foodName').value,
        description: document.querySelector('#foodDescription').value,
        image: document.querySelector('#imageUrl').value,
        price: document.querySelector('#price').value,
        glutenFree: document.querySelector('#glutenFree').checked,
        vegetarian: document.querySelector('#vegetarian').checked
      };
      createFood(foodObject, id).then((response) => showFood(response));
    }

    if (e.target.id.includes('add-newStaff-btn')) {
      headerTitle('Add Staff');
      createStaff();
    }

    if (e.target.id.includes('submitNewStaff')) {
      e.preventDefault();
      const staffObject = {
        first_name: document.querySelector('#staffFirstName').value,
        last_name: document.querySelector('#staffLastName').value,
        staff_image: document.querySelector('#staffImage').value,
        role: document.querySelector('#staffRole').value,
        event_id: id
      };
      createNewStaff(staffObject, id).then((staffArray) => showStaff(staffArray));
    }

    if (e.target.id.includes('show-show-form')) {
      createShowForm();
    }
    if (e.target.id.includes('submit-show')) {
      e.preventDefault();

      const showObject = {
        name: document.querySelector('#showName').value,
        image: document.querySelector('#image').value,
        date: document.querySelector('#date').value,
        description: document.querySelector('#description').value,
        event_id: id
      };
      createShow(showObject, id).then((showsArray) => printShows(showsArray));
    }
    if (e.target.id.includes('add-souvenir-btn')) {
      headerTitle('Souvenirs');
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
      createSouvenirs(souvenirsObject, id).then((souvenirArray) => showSouvenirs(souvenirArray));
    }
    // DELETE SOUVENIR
    if (e.target.id.includes('delete-souvenir')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you sure?')) {
        const firebaseKey = e.target.id.split('--')[1];
        deleteSouvenirs(firebaseKey, id).then((souvenirArray) => showSouvenirs(souvenirArray));
      }
    }
    if (e.target.id.includes('edit-souvenir')) {
      const firebaseKey = e.target.id.split('--')[1];
      e.preventDefault();
      editFormModal('Edit Souvenir');
      getSingleSouvenir(firebaseKey).then((souvenirObject) => editSouvenirsForm(souvenirObject));
      $('#formModal').modal('toggle');
    }
    if (e.target.id.includes('update-souvenir')) {
      const firebaseKey = e.target.id.split('--')[1];
      e.preventDefault();
      const souvenirObject = {
        souvenir_image: document.querySelector('#image').value,
        name: document.querySelector('#title').value,
        souvenir_price: document.querySelector('#price').value,
        souvenir_description: document.querySelector('#description').value
      };
      updateSouvenir(firebaseKey, souvenirObject, id).then((souvenirArray) => showSouvenirs(souvenirArray));
      $('#formModal').modal('toggle');
    }
    if (e.target.id.includes('food-delete-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you sure?')) {
        const firebaseKey = e.target.id.split('--')[1];
        deleteFood(firebaseKey, id).then((foodArray) => showFood(foodArray));
      }
    }
    if (e.target.id.includes('delete-show')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you sure?')) {
        const firebaseKey = e.target.id.split('^^')[1];
        deleteShow(firebaseKey, id).then((showsArray) => printShows(showsArray));
      }
    }
    if (e.target.id.includes('delete-staff')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you sure?')) {
        const firebaseKey = e.target.id.split('--')[1];
        deleteStaff(firebaseKey, id).then((staffArray) => showStaff(staffArray));
      }
    }

    if (e.target.id.includes('edit-staff')) {
      const firebaseKey = e.target.id.split('--')[1];
      editFormModal('Update Staff');
      getSingleStaff(firebaseKey).then((staffObject) => updateStaffForm(staffObject));
    }

    if (e.target.id.includes('update-staff')) {
      const firebaseKey = e.target.id.split('--')[1];
      e.preventDefault();
      const staffObject = {
        first_name: document.querySelector('#staffFirstName').value,
        last_name: document.querySelector('#staffLastName').value,
        staff_image: document.querySelector('#staffImage').value,
        role: document.querySelector('#staffRole').value,
      };
      updateStaff(firebaseKey, staffObject, id).then((staffArray) => showStaff(staffArray));
    }
    if (e.target.id.includes('food-edit-btn')) {
      const firebaseKey = e.target.id.split('--')[1];
      editFormModal('Edit Food');
      getSingleFood(firebaseKey).then((response) => editFoodForm(response));
    }
    if (e.target.id.includes('submit-edit-food')) {
      const firebaseKey = e.target.id.split('--')[1];
      e.preventDefault();
      const foodObject = {
        name: document.querySelector('#foodName').value,
        description: document.querySelector('#foodDescription').value,
        image: document.querySelector('#imageUrl').value,
        price: document.querySelector('#price').value,
        glutenFree: document.querySelector('#glutenFree').checked,
        vegetarian: document.querySelector('#vegetarian').checked
      };
      updateFood(firebaseKey, foodObject, id).then((arr) => showFood(arr));
      $('#formModal').modal('toggle');
    }
  });
};

export default domEvents;

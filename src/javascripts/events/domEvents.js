import firebase from 'firebase/app';
import 'firebase/auth';
import printShows from '../components/printShows';
import { showSouvenirs } from '../components/showSouvenirs';
import {
  createSouvenirs, deleteSouvenirs, getAllSouvenirs, getSingleSouvenir, updateSouvenir
} from '../helpers/data/souvenirData';
import showFood from '../components/showFood';
import {
  createNewStaff,
  deleteStaff,
  getSingleStaff,
  updateStaff,
  getAllStaff,
} from '../helpers/data/staffData';
import {
  createFood,
  deleteFood,
  getAllFood,
  getSingleFood,
  updateFood
} from '../helpers/data/foodData';
import { showStaff } from '../components/showStaff';
import createStaff from '../components/forms/createStaff';
import {
  createShow, deleteShow, getAllShows, getSingleShow, updateShow
} from '../helpers/data/showsData';
import createFoodForm from '../components/forms/createFoodForm';
import createShowForm from '../components/forms/createShowForm';
import newSouvenirsForm from '../components/forms/newWaresForm';
import updateStaffForm from '../components/forms/updateStaffForm';
import editSouvenirsForm from '../components/forms/editSouvenirsForm';
import editFoodForm from '../components/forms/editFoodForm';
import formModal from '../components/forms/formModal';
import editShowForm from '../components/forms/editShowForm';
import showFoodReadOnly from '../components/readOnlyPrinters/showFoodReadOnly';
import { showStaffReadOnly } from '../components/readOnlyPrinters/showStaffReadOnly';
import printShowsReadOnly from '../components/readOnlyPrinters/showShowsReadOnly';
import { showSouvenirsReadOnly } from '../components/readOnlyPrinters/showSouvenirsReadOnly';
import { getSingleEvent, deleteEvent } from '../helpers/data/eventsData';
import deleteConfirm from '../components/forms/deleteConfirm';
import { showEvents } from '../components/showEvents';
import showSingleEvent from '../components/showSingleEvent';

const eventListeners = (e) => {
  const user = firebase.auth().currentUser;
  if (e.target.id.includes('souvenir-view')) {
    if (user) {
      getAllSouvenirs().then((souvenirArray) => showSouvenirs(souvenirArray));
    } else {
      getAllSouvenirs().then((souvenirArray) => showSouvenirsReadOnly(souvenirArray));
    }
  }

  if (e.target.id.includes('food-view')) {
    if (user) {
      getAllFood().then((foodArray) => showFood(foodArray));
    } else {
      getAllFood().then((foodArray) => showFoodReadOnly(foodArray));
    }
  }

  if (e.target.id.includes('staff-view')) {
    if (user) {
      getAllStaff().then((staffArray) => showStaff(staffArray));
    } else {
      getAllStaff().then((staffArray) => showStaffReadOnly(staffArray));
    }
  }

  if (e.target.id.includes('shows-view')) {
    if (user) {
      getAllShows().then((showsArray) => printShows(showsArray));
    } else {
      getAllShows().then((showsArray) => printShowsReadOnly(showsArray));
    }
  }

  if (e.target.id.includes('create-food')) {
    createFoodForm();
  }

  if (e.target.id.includes('submit-food')) {
    e.preventDefault();
    const foodObject = {
      name: document.querySelector('#foodName').value,
      description: document.querySelector('#foodDescription').value,
      image: document.querySelector('#imageUrl').value,
      price: document.querySelector('#price').value,
      glutenFree: document.querySelector('#glutenFree').checked,
      vegetarian: document.querySelector('#vegetarian').checked
    };
    createFood(foodObject).then((response) => showFood(response));
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
      role: document.querySelector('#staffRole').value,
    };
    createNewStaff(staffObject).then((staffArray) => showStaff(staffArray));
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
    };
    createShow(showObject).then((showsArray) => printShows(showsArray));
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
    };
    createSouvenirs(souvenirsObject).then((souvenirArray) => showSouvenirs(souvenirArray));
  }
  // DELETE SOUVENIR
  if (e.target.id.includes('delete-souvenir')) {
    const firebaseKey = e.target.id.split('--')[1];
    deleteSouvenirs(firebaseKey).then((souvenirArray) => showSouvenirs(souvenirArray));
    $('#formModal').modal('toggle');
  }

  if (e.target.id.includes('edit-souvenir')) {
    const firebaseKey = e.target.id.split('--')[1];
    e.preventDefault();
    formModal('Edit Souvenir');
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
    updateSouvenir(firebaseKey, souvenirObject).then((souvenirArray) => showSouvenirs(souvenirArray));
    $('#formModal').modal('toggle');
  }

  if (e.target.id.includes('delete-food')) {
    const firebaseKey = e.target.id.split('--')[1];
    deleteFood(firebaseKey).then((foodArray) => showFood(foodArray));
    $('#formModal').modal('toggle');
  }

  if (e.target.id.includes('delete-modal')) {
    const firebaseKey = e.target.id.split('--')[1];
    e.preventDefault();
    formModal('Are you sure?');
    if (e.target.id.includes('show')) {
      getSingleShow(firebaseKey).then((showsObject) => deleteConfirm(showsObject, 'show'));
    }
    if (e.target.id.includes('food')) {
      getSingleFood(firebaseKey).then((foodObject) => deleteConfirm(foodObject, 'food'));
    }
    if (e.target.id.includes('souvenir')) {
      getSingleSouvenir(firebaseKey).then((souvenirObject) => deleteConfirm(souvenirObject, 'souvenir'));
    }
    if (e.target.id.includes('staff')) {
      getSingleStaff(firebaseKey).then((staffObject) => deleteConfirm(staffObject, 'staff'));
    }
    if (e.target.id.includes('event')) {
      getSingleEvent(firebaseKey).then((eventObject) => deleteConfirm(eventObject, 'event'));
    }
  }

  if (e.target.id.includes('delete-show')) {
    const firebaseKey = e.target.id.split('--')[1];
    deleteShow(firebaseKey).then((showsArray) => printShows(showsArray));
    $('#formModal').modal('toggle');
  }

  if (e.target.id.includes('delete-staff')) {
    const firebaseKey = e.target.id.split('--')[1];
    deleteStaff(firebaseKey).then((staffArray) => showStaff(staffArray));
    $('#formModal').modal('toggle');
  }

  if (e.target.id.includes('edit-staff')) {
    const firebaseKey = e.target.id.split('--')[1];
    formModal('Update Staff');
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
    updateStaff(firebaseKey, staffObject).then((staffArray) => showStaff(staffArray));
    $('#formModal').modal('toggle');
  }

  if (e.target.id.includes('edit-show')) {
    const firebaseKey = e.target.id.split('--')[1];
    formModal('Edit Show');
    getSingleShow(firebaseKey).then((showObject) => editShowForm(showObject));
  }

  if (e.target.id.includes('update-show')) {
    const firebaseKey = e.target.id.split('--')[1];
    e.preventDefault();
    const showObject = {
      name: document.querySelector('#showName').value,
      image: document.querySelector('#image').value,
      date: document.querySelector('#date').value,
      description: document.querySelector('#description').value,
    };
    updateShow(firebaseKey, showObject).then((showsArray) => printShows(showsArray));
    $('#formModal').modal('toggle');
  }

  if (e.target.id.includes('food-edit-btn')) {
    const firebaseKey = e.target.id.split('--')[1];
    formModal('Edit Food');
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
    updateFood(firebaseKey, foodObject).then((arr) => showFood(arr));
    $('#formModal').modal('toggle');
  }

  if (e.target.id.includes('delete-event')) {
    const firebaseKey = e.target.id.split('--')[1];
    deleteEvent(firebaseKey).then((eventsArray) => showEvents(eventsArray));
    $('#formModal').modal('toggle');
  }

  if (e.target.id.includes('event-details-btn')) {
    showSingleEvent();
  }
};

const domEvents = () => {
  document.querySelector('body').addEventListener('click', eventListeners);
};

export { eventListeners, domEvents };

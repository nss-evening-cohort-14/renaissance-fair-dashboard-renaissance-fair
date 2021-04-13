import firebase from 'firebase/app';
import 'firebase/auth';
import printShows from '../components/printShows';
import { showSouvenirs } from '../components/showSouvenirs';
import {
  getSouvenirs, createSouvenirs, deleteSouvenirs, getSingleSouvenir, updateSouvenir
} from '../helpers/data/souvenirData';
import showFood from '../components/showFood';
import {
  createNewStaff,
  getStaff, deleteStaff,
  getSingleStaff,
  updateStaff,
} from '../helpers/data/staffData';
import {
  createFood,
  deleteFood,
  getFood,
  getSingleFood,
  updateFood
} from '../helpers/data/foodData';
import { showStaff } from '../components/showStaff';
import createStaff from '../components/forms/createStaff';
import {
  createShow, deleteShow, getShows, getSingleShow, updateShow
} from '../helpers/data/showsData';
import createFoodForm from '../components/forms/createFoodForm';
import createShowForm from '../components/forms/createShowForm';
import newSouvenirsForm from '../components/forms/newWaresForm';
import headerTitle from '../components/headerTitle';
import updateStaffForm from '../components/forms/updateStaffForm';
import editSouvenirsForm from '../components/forms/editSouvenirsForm';
import editFoodForm from '../components/forms/editFoodForm';
import formModal from '../components/forms/formModal';
import editShowForm from '../components/forms/editShowForm';
import showFoodReadOnly from '../components/readOnlyPrinters/showFoodReadOnly';
import { showStaffReadOnly } from '../components/readOnlyPrinters/showStaffReadOnly';
import printShowsReadOnly from '../components/readOnlyPrinters/showShowsReadOnly';
import { showSouvenirsReadOnly } from '../components/readOnlyPrinters/showSouvenirsReadOnly';
import { getEvents } from '../helpers/data/eventsData';
import deleteConfirm from '../components/forms/deleteConfirm';

const eventListeners = (e) => {
  const user = firebase.auth().currentUser;
  if (e.target.id.includes('souvenir-view')) {
    headerTitle('Souvenirs');
    if (user) {
      getEvents().then((x) => {
        getSouvenirs(x.firebaseKey).then((souvenirArray) => showSouvenirs(souvenirArray));
      });
    } else {
      getEvents().then((x) => {
        getSouvenirs(x.firebaseKey).then((souvenirArray) => showSouvenirsReadOnly(souvenirArray));
      });
    }
  }
  if (e.target.id.includes('food-view')) {
    if (user) {
      getEvents().then((x) => {
        getFood(x.firebaseKey).then((foodArray) => showFood(foodArray));
      });
    } else {
      getEvents().then((x) => {
        getFood(x.firebaseKey).then((foodArray) => showFoodReadOnly(foodArray));
      });
    }
  }
  if (e.target.id.includes('staff-view')) {
    headerTitle('See Our Staff');
    if (user) {
      getEvents().then((x) => {
        getStaff(x.firebaseKey).then((staffArray) => showStaff(staffArray));
      });
    } else {
      getEvents().then((x) => {
        getStaff(x.firebaseKey).then((staffArray) => showStaffReadOnly(staffArray));
      });
    }
  }
  if (e.target.id.includes('shows-view')) {
    if (user) {
      getEvents().then((x) => {
        getShows(x.firebaseKey).then((showsArray) => printShows(showsArray));
      });
    } else {
      getEvents().then((x) => {
        getShows(x.firebaseKey).then((showsArray) => printShowsReadOnly(showsArray));
      });
    }
  }
  if (e.target.id.includes('create-food')) {
    createFoodForm();
  }
  if (e.target.id.includes('submit-food')) {
    e.preventDefault();
    getEvents().then((x) => {
      const foodObject = {
        event_id: x.firebaseKey,
        name: document.querySelector('#foodName').value,
        description: document.querySelector('#foodDescription').value,
        image: document.querySelector('#imageUrl').value,
        price: document.querySelector('#price').value,
        glutenFree: document.querySelector('#glutenFree').checked,
        vegetarian: document.querySelector('#vegetarian').checked
      };
      createFood(foodObject, x.firebaseKey).then((response) => showFood(response));
    });
  }

  if (e.target.id.includes('add-newStaff-btn')) {
    headerTitle('Add Staff');
    createStaff();
  }

  if (e.target.id.includes('submitNewStaff')) {
    getEvents().then((x) => {
      e.preventDefault();
      const staffObject = {
        first_name: document.querySelector('#staffFirstName').value,
        last_name: document.querySelector('#staffLastName').value,
        staff_image: document.querySelector('#staffImage').value,
        role: document.querySelector('#staffRole').value,
        event_id: x.firebaseKey
      };
      createNewStaff(staffObject, x.firebaseKey).then((staffArray) => showStaff(staffArray));
    });
  }

  if (e.target.id.includes('show-show-form')) {
    createShowForm();
  }
  if (e.target.id.includes('submit-show')) {
    e.preventDefault();
    getEvents().then((x) => {
      const showObject = {
        name: document.querySelector('#showName').value,
        image: document.querySelector('#image').value,
        date: document.querySelector('#date').value,
        description: document.querySelector('#description').value,
        event_id: x.firebaseKey
      };
      createShow(showObject, x.firebaseKey).then((showsArray) => printShows(showsArray));
    });
  }
  if (e.target.id.includes('add-souvenir-btn')) {
    headerTitle('Souvenirs');
    newSouvenirsForm();
  }
  if (e.target.id.includes('submit-souvenirs')) {
    e.preventDefault();
    getEvents().then((x) => {
      const souvenirsObject = {
        souvenir_image: document.querySelector('#image').value,
        name: document.querySelector('#title').value,
        souvenir_price: document.querySelector('#price').value,
        souvenir_description: document.querySelector('#description').value,
        event_id: x.firebaseKey
      };
      createSouvenirs(souvenirsObject, x.firebaseKey).then((souvenirArray) => showSouvenirs(souvenirArray));
    });
  }
  // DELETE SOUVENIR
  if (e.target.id.includes('delete-souvenir')) {
    const firebaseKey = e.target.id.split('--')[1];
    getEvents().then((x) => {
      deleteSouvenirs(firebaseKey, x.firebaseKey).then((souvenirArray) => showSouvenirs(souvenirArray));
    });
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
    getEvents().then((x) => {
      const souvenirObject = {
        souvenir_image: document.querySelector('#image').value,
        name: document.querySelector('#title').value,
        souvenir_price: document.querySelector('#price').value,
        souvenir_description: document.querySelector('#description').value
      };
      updateSouvenir(firebaseKey, souvenirObject, x.firebaseKey).then((souvenirArray) => showSouvenirs(souvenirArray));
      $('#formModal').modal('toggle');
    });
  }
  if (e.target.id.includes('delete-food')) {
    const firebaseKey = e.target.id.split('--')[1];
    getEvents().then((x) => {
      deleteFood(firebaseKey, x.firebaseKey).then((foodArray) => showFood(foodArray));
      $('#formModal').modal('toggle');
    });
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
  }
  if (e.target.id.includes('delete-show')) {
    const firebaseKey = e.target.id.split('--')[1];
    getEvents().then((x) => {
      deleteShow(firebaseKey, x.firebaseKey).then((showsArray) => printShows(showsArray));
      $('#formModal').modal('toggle');
    });
  }
  if (e.target.id.includes('delete-staff')) {
    const firebaseKey = e.target.id.split('--')[1];
    getEvents().then((x) => {
      deleteStaff(firebaseKey, x.firebaseKey).then((staffArray) => showStaff(staffArray));
    });
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
    getEvents().then((x) => {
      const staffObject = {
        first_name: document.querySelector('#staffFirstName').value,
        last_name: document.querySelector('#staffLastName').value,
        staff_image: document.querySelector('#staffImage').value,
        role: document.querySelector('#staffRole').value,
      };
      updateStaff(firebaseKey, staffObject, x.firebaseKey).then((staffArray) => showStaff(staffArray));
      $('#formModal').modal('toggle');
    });
  }
  if (e.target.id.includes('edit-show')) {
    const firebaseKey = e.target.id.split('--')[1];
    formModal('Edit Show');
    getSingleShow(firebaseKey).then((showObject) => editShowForm(showObject));
  }
  if (e.target.id.includes('update-show')) {
    const firebaseKey = e.target.id.split('--')[1];
    e.preventDefault();
    getEvents().then((x) => {
      const showObject = {
        name: document.querySelector('#showName').value,
        image: document.querySelector('#image').value,
        date: document.querySelector('#date').value,
        description: document.querySelector('#description').value,
      };
      updateShow(firebaseKey, showObject, x.firebaseKey).then((showsArray) => printShows(showsArray));
      $('#formModal').modal('toggle');
    });
  }
  if (e.target.id.includes('food-edit-btn')) {
    const firebaseKey = e.target.id.split('--')[1];
    formModal('Edit Food');
    getSingleFood(firebaseKey).then((response) => editFoodForm(response));
  }
  if (e.target.id.includes('submit-edit-food')) {
    const firebaseKey = e.target.id.split('--')[1];
    e.preventDefault();
    getEvents().then((x) => {
      const foodObject = {
        name: document.querySelector('#foodName').value,
        description: document.querySelector('#foodDescription').value,
        image: document.querySelector('#imageUrl').value,
        price: document.querySelector('#price').value,
        glutenFree: document.querySelector('#glutenFree').checked,
        vegetarian: document.querySelector('#vegetarian').checked
      };
      updateFood(firebaseKey, foodObject, x.firebaseKey).then((arr) => showFood(arr));
      $('#formModal').modal('toggle');
    });
  }
  // Form input value stuff
  if (e.target.id.includes('submit-event-form')) {
    e.preventDefault();
    const 

    
  }
};
const domEvents = () => {
  document.querySelector('body').addEventListener('click', eventListeners);
};

export { eventListeners, domEvents };

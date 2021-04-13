import { getAllFood } from '../../helpers/data/foodData';
import { getAllSouvenirs } from '../../helpers/data/souvenirData';
import { getAllShows } from '../../helpers/data/showsData';
import { getAllStaff } from '../../helpers/data/staffData';

const selectMainCourseOne = () => {
  let domString = `<label for="mainCourseChoice1">Main Course Choice 1</label>
  <select class="form-control" id="main-course-1">
  <option value="">Select a Main Course</option>`;

  getAllFood().then((foodArray) => {
    foodArray.forEach((item) => {
      domString += `<option value="${item.firebaseKey}">${item.name}</option>`;
    });

    domString += '</select>';
    document.querySelector('#select-main-course-1').innerHTML = domString;
  });
};

const selectMainCourseTwo = () => {
  let domString = `<label for="mainCourseChoice2">Main Course Choice 2</label>
  <select class="form-control" id="main-course-2">
  <option value="">Select a Main Course</option>`;

  getAllFood().then((foodArray) => {
    foodArray.forEach((item) => {
      domString += `<option value="${item.firebaseKey}">${item.name}</option>`;
    });

    domString += '</select>';
    document.querySelector('#select-main-course-2').innerHTML = domString;
  });
};

const selectDesert = () => {
  let domString = `<label for="desert">Desert</label>
  <select class="form-control" id="desert">
  <option value="">Select a Desert</option>`;

  getAllFood().then((foodArray) => {
    foodArray.forEach((item) => {
      domString += `<option value="${item.firebaseKey}">${item.name}</option>`;
    });

    domString += '</select>';
    document.querySelector('#select-desert').innerHTML = domString;
  });
};

const selectStaff = () => {
  let domString = `<label for="staff">Staff</label>
  <select multiple class="form-control" id="staff-options">
  <option value="">Select Staff</option>`;

  getAllStaff().then((staffArray) => {
    staffArray.forEach((item) => {
      domString += `<option value="${item.firebaseKey}">${item.first_name} ${item.last_name}</option>`;
    });

    domString += '</select>';
    document.querySelector('#select-staff').innerHTML = domString;
  });
};

const selectShow = () => {
  let domString = `<label for="shows">Shows</label>
  <select multiple class="form-control" id="shows-option">
  <option value="">Select Shows</option>`;

  getAllShows().then((showArray) => {
    showArray.forEach((item) => {
      domString += `<option value="${item.firebaseKey}">${item.name}</option>`;
    });

    domString += '</select>';
    document.querySelector('#select-show').innerHTML = domString;
  });
};

const selectSouvenirs = () => {
  let domString = `<label for="souvenirs">Souvenirs</label>
    <select multiple class="form-control" id="souvenirs-option">
    <option value="">Select Souvenirs</option>`;

  getAllSouvenirs().then((staffArray) => {
    staffArray.forEach((item) => {
      domString += `<option value="${item.firebaseKey}">${item.name}</option>`;
    });

    domString += '</select>';
    document.querySelector('#select-staff').innerHTML = domString;
  });
};

export {
  selectMainCourseOne, selectMainCourseTwo, selectDesert, selectStaff, selectShow, selectSouvenirs
};
